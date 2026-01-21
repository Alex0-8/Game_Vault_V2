import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchGameDetails, fetchGames } from "../../redux/slices/gameSlice";
import { useCart } from "../hooks/useCart";
import BackupProducts from "../BackupProducts";
import { Game, ProductsSection } from "../../theme/commonStyles";
import loadingImg from '../../Img/loading5.gif'
import SearchBar from "../SearchBar";
import GamesDetailsModal from "../GameDetailsModal";

const Products = ( {testing} ) => {
    const dispatch = useDispatch();
    const { addToCart } = useCart();
    const { searchResults, list, loading, searchLoading, detailsLoading, error, searchError } = useSelector((state) => state.games);

    // carga los juegos al entrar al componente
    useEffect(() => { 
        if(testing) return;
        dispatch(fetchGames());
    }, [dispatch]);

    const getCoverUrl = (cover) => {
        if(cover?.image_id) return `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`

        if(typeof cover === "string") return cover;

        return "https://placehold.co/300x400?text=Sin+Imagen"
    }

    if(!loading && list === undefined) { // si el servidor no devuelve algo se muestra el componente con las tarjetas de respaldo
        return (
            <BackupProducts />
        )
    }
    
    if (loading  || searchLoading || detailsLoading) return <ProductsSection><img src={loadingImg} alt="Cargando..." className="loading-img" /></ProductsSection>
    if (error != null || searchError) return <ProductsSection>Error: {error}</ProductsSection>

    const handleAddToCart = (game) => { // funcion para añadir los productos al carrito
        const newEntry = {
            id: game.id,
            title: game.name,
            coverUrl: game.cover ? getCoverUrl(game.cover) : null,
            price: game.finalPrice || game.basePrice,
        }

        addToCart(newEntry)
    }

    const handleCardClick = (gameId) => {
        dispatch(fetchGameDetails(gameId))
    }

    return(
        <ProductsSection>
            <SearchBar />
            {(searchResults.length > 0 ? searchResults : list).map((game) => (
                <Game key={game.id}>
                    {game.cover ? (
                        <img
                            src={getCoverUrl(game.cover)}
                            alt={game.name} 
                        />
                    ) : (
                        <img 
                            src={`https://placehold.co/300x400?text=${'"Image Error" ' + game.name}`}
                            alt={game.name}
                        />
                    )}

                    <div>
                        <p onClick={() => handleCardClick(game.id)} className="game-title">{game.name}</p>
                        
                        {game.discount > 0 ? (
                            <>
                            <p>${game.basePrice} USD</p>
                            <p>
                                Oferta: ${game.finalPrice} USD ({game.discount}% OFF) 
                            </p>
                            </>
                        ) : (
                            <p>${game.basePrice} USD</p>
                        )}
                        <button onClick={() => handleAddToCart(game)}>Agregar al Carrito</button>
                    </div>
                </Game>
            ))}
            <GamesDetailsModal />
        </ProductsSection>
    )
}

export default Products;