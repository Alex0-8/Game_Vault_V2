import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const RAWG_KEY = "40ffbd36f8284591830c28b3321d7894"
const RAWG_BASE_URL = "https://api.rawg.io/api"
const CHEAPSHARK_BASE_URL = "https://www.cheapshark.com/api/1.0"

//thunk para traer los juegos
export const fetchGames = createAsyncThunk("games/fetchGames", async () => {

    //funcion para añadir un precio falso de entre 10 y 70 dolares
    const addFakePrice = (games) => {
        return games.map((game) => {
            const basePrice = (Math.random() * (70 - 10) + 10).toFixed(2) //precio entre 10 y 70 dolares

            //decidir si tendra un descuento con un 40% de prob
            const hasDiscount = Math.random() < 0.4;
            let discount = 0;
            let finalPrice = basePrice;

            if(hasDiscount) {
                discount = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
                finalPrice = (basePrice - (basePrice * discount) / 100).toFixed(2);
            }
            
            return {
                ...game,
                basePrice,
                discount,
                finalPrice
            };
        });
    }

    try{ // intenta traer datos desde IGDB
        const igdbResponse = await axios.get("http://localhost:5000/games");
        const igdbGames = addFakePrice(igdbResponse.data)
        console.log(`juegos cargados correctamente`)
        return igdbGames;
    }catch(err){
        console.warn(`Error al conectar con igdb: ${err}`)
    }

    try{// si IGDB falla usa RAWG y CheapShark
        const rawgResponse = await axios.get(`${RAWG_BASE_URL}/games`, {
            params: {key: RAWG_KEY, page_size: 20},
        })

        const rawGames = rawgResponse.data.results;

        const gamesWithPrices = await Promise.all(
            rawGames.map(async (game) => {
                try{ // busca el precio en cheapshark
                    const priceResponse = await axios.get(`${CHEAPSHARK_BASE_URL}/games`, {
                        params: {title: game.name}
                    })

                    const priceData = priceResponse.data[0];

                    const basePrice = priceData?.cheapest
                        ? parseFloat(priceData.cheapest).toFixed(2)
                        : (Math.random() * (70 - 10) + 10).toFixed(2)

                    const hasDiscount = Math.random() < 0.3;
                    const discount = hasDiscount
                        ? Math.floor(Math.random() * (50 - 10 + 1)) + 10
                        : 0;

                    const finalPrice = hasDiscount
                        ? (basePrice - (basePrice * discount) / 100).toFixed(2)
                        : basePrice

                    return {
                        id: game.id,
                        name: game.name,
                        cover: game.background_image,
                        basePrice,
                        discount,
                        finalPrice,
                    }
                }catch{ // si cheapshark falla usa un precio falso
                    const basePrice = (Math.random() * (70 - 10) + 10).toFixed(2)
                    return {
                        id: game.id,
                        name: game.name,
                        cover: game.background_image,
                        basePrice,
                        discount: 0,
                        finalPrice: basePrice,
                    };
                }
            })
        );

        console.log(`Respaldo RAWG + CheapShark cargado`)
        return gamesWithPrices;
    }catch(err){ // si cheapshark falla usa un precio falso
        console.error(`Falla total: no respondio ninguna api: ${err}`)
    }

})

export const fetchSearchResults = createAsyncThunk( //fetch para el buscador
    "games/fetchSearchResults",
    async (query) => {
        if (!query) return [];

        try{ // primero intenta buscar por igdb
            const igdbResponse = await axios.get(`http://localhost:5000/games/search/${query}`);
            const igdbResults = igdbResponse.data;
            if (igdbResults.length > 0) return igdbResults;
        }catch(err){
            console.warn("No se pudo buscar en IGDB: ", err.message)
        }

        try{ // si igdb no funciona buscara por rawg
            const rawgResponse = await axios.get(`${RAWG_BASE_URL}/games`, {
                params: { key: RAWG_KEY, search: query, page_size: 18},
            });

            const results = rawgResponse.data.results.map((game) => ({
                id: game.id,
                name: game.name,
                cover: game.background_image,
                basePrice: (Math.random() * (70 - 10) + 10).toFixed(2),
                discount: 0,
                finalPrice: (Math.random() * (70 - 10) + 10).toFixed(2)
            }));

            console.log(`Resultados de Rawg: ${results.length}`)
            return results;
        }catch(err){
            console.error(`Error al buscar ${query}: ${err.message}`)
            throw err;
        }
    }
)

//thunk para conseguir los detalles de un juego al hacer clic en una tarjeta
export const fetchGameDetails = createAsyncThunk("games/fetchGameDetails", async (id) => {
    try{ //intenta conseguir los datos de igdb
        const igdbResponse = await axios.get(`http://localhost:5000/games/${id}`);
        if(igdbResponse.data) {
            return igdbResponse.data
        }
    }catch{
        console.warn("IGDB nos disponible, usando respaldo...")
    }

    try{ // inenta conseguir los datos desde RAWG
        const rawgResponse = await axios.get(`${RAWG_BASE_URL}/games/${id}`, {
            params: { key: RAWG_KEY }
        });

        const game = rawgResponse.data;

        //busca precio en CheapShark
        const priceResponse = await axios.get(`${CHEAPSHARK_BASE_URL}/games`, {
            params: {title: game.name},
        })

        const priceData = priceResponse.data[0];
        const basePrice = priceData?.cheapest
            ? parseFloat(priceData.cheapest).toFixed(2)
            : (Math.random() * (70 - 10) + 10).toFixed(2);

        const hasDiscount = Math.random() < 0.3;
        const discount = hasDiscount
            ? Math.floor(Math.random() * (50 - 10 + 1)) + 10
            : 0;

        const finalPrice = hasDiscount
            ? (basePrice - (basePrice * discount) / 100).toFixed(2)
            : basePrice;

        console.log("trailer= ", game.clip?.clip)
        console.log("generos: ", game.genres)
        return {
            id: game.id,
            title: game.name,
            description: game.description_raw,
            genres: game.genres?.map((g) => g.name),
            platforms: game.platforms?.map((p) => p.platform.name),
            trailer: game.clip?.clip || null,
            coverUrl: game.background_image,
            basePrice,
            discount,
            finalPrice,
        }
    }catch(err){
        console.error("No se pudo obtener detalles: ", err.message)
        throw err
    }
})

const gameSlice = createSlice({
    name: "games",
    initialState: {
        list: [],
        loading: false,
        error: null,
        cartList: [],
        cartCount: 0,
        cartAmount: 0,
        searchResults: [],
        searchLoading: false,
        searchError: null,
        selectedGame: null,
        detailsLoading: false,
    },
    reducers: {
        setCartItems: (state, action) => {
            state.cartList = action.payload
        },
        setCartCounter: (state, action) => {
            state.cartCount = action.payload
        },
        setCartAmount: (state, action) => {
            state.cartAmount = action.payload
        },
        clearSelectedGame: (state) => {
            state.selectedGame = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSearchResults.pending, (state) => { // extrareducers del buscador
                state.searchLoading = true;
                state.searchError = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.searchLoading = false;
                state.searchResults = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.searchLoading = false;
                state.searchError = action.error.message;
            })
            .addCase(fetchGameDetails.pending, (state) => {// extra reducers de los detalles
                state.detailsLoading = true;
            })
            .addCase(fetchGameDetails.fulfilled, (state, action) => {
                state.detailsLoading = false;
                state.selectedGame = action.payload;
            })
            .addCase(fetchGameDetails.rejected, (state, action) => {
                state.detailsLoading = false;
                state.error = action.payload;
            })
    }
})

export const { setCartItems, setCartCounter, setCartAmount, clearSelectedGame } = gameSlice.actions;

export default gameSlice.reducer;