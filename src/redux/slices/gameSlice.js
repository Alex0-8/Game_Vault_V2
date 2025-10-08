import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//thunk para traer los juegos
export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
    const response = await axios.get("http://localhost:5000/games");

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

    return addFakePrice(response.data);
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
    }
})

export const { setCartItems, setCartCounter, setCartAmount } = gameSlice.actions;

export default gameSlice.reducer;