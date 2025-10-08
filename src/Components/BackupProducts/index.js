import React from "react";
import { Game, ProductsSection } from "../../theme/commonStyles";
import { useCart } from "../hooks/useCart";

const cards = Math.floor(Math.random() * (15 - 10 + 1)) + 10; // variable para generar un numero aleatorio de taretas

// genera una lista de respaldo
const backupList = Array.from({ length: cards }, (_, i) => ({
    id: i + 1,
    name: `Juego de ejemplo ${i + 1}`,
    basePrice: (Math.random() * (60 -20) + 20).toFixed(2),
    discount: Math.random() > 0.5 ? Math.floor(Math.random() * 50) : 0, // 50% de prob de tener descuento 
    cover: {
        image_id: `backup-${i + 1}`,
    },
}))

const getCoverUrl = (imageId) => `https://placehold.co/300x400?text=${imageId}`;

//componente que renderiza tarjetas por si la api no funciona
const BackupProducts = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (game) => {
        const newEntry = {
            id: game.id,
            title: game.name,
            coverUrl: getCoverUrl(game.cover.image_id),
            price: game.finalPrice || game.basePrice,
        };

        addToCart(newEntry)
    }

    return (
        <>
        <h2 className="server-error">No se encontró el servidor</h2>
        <ProductsSection>
            
            {backupList.map((game) => (
                <Game key={game.id}>
                    {game.cover && (
                        <img src={getCoverUrl(game.cover.image_id)} alt={game.name} />
                    )}

                    <div>
                        <p>{game.name}</p>
                        
                        {game.discount > 0 ? (
                            <>
                                <p>${game.basePrice} USD</p>
                                <p>
                                    Oferta: $5 USD ({game.discount}% OFF)
                                </p>
                            </>
                        ) : (
                            <p>${game.basePrice} USD</p>
                        )}

                        <button onClick={() => handleAddToCart(game)}>
                            Agregar al Carrito
                        </button>
                    </div>
                </Game>
            ))}
        </ProductsSection>
        </>
    )
}

export default BackupProducts