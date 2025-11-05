import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../hooks/useCart";
import { clearSelectedGame } from "../../redux/slices/gameSlice";
import { Backdrop, Btn, ModalContainer, ModalContent, ModalHeader } from "./styles";

const GamesDetailsModal = () => {
    const dispatch = useDispatch();
    const { addToCart } = useCart();
    const { selectedGame } = useSelector((state) => state.games)

    useEffect(() => { //impide el scroll en la pantalla cuando el modal está abierto
        if(selectedGame) {
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedGame])

    if(!selectedGame) return null;

    const handleAddToCart = (game) => { // funcion para añadir los productos al carrito
        const newEntry = {
            id: game.id,
            title: game.title,
            coverUrl: game.coverUrl || null,
            price: game.finalPrice || game.basePrice,
        }

        addToCart(newEntry)
    }

    return (
        <Backdrop $visible={!!selectedGame} onClick={() => dispatch(clearSelectedGame())}>
            <ModalContainer $visible={!!selectedGame} onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <img src={selectedGame.coverUrl} alt={selectedGame.title} />
                    <Btn onClick={() => dispatch(clearSelectedGame())}>X</Btn>
                </ModalHeader>
                <ModalContent>
                    <h2>{selectedGame.title}</h2>
                    <p>{selectedGame.description || "Sin despripcion disponible"}</p>
                    <p>
                        <strong>Géneros: </strong>
                        {selectedGame.genres?.map((g) => <span key={g}>{g}</span>)}
                    </p>
                    <p>
                        <strong>Plataformas: - </strong>
                        {selectedGame.platforms?.map((p) => <span key={p}>{p} - </span>)}
                    </p>
                    {selectedGame.trailer && (
                        <iframe
                            src={selectedGame.trailer}
                            title="Trailer"
                            height="300"
                            allowFullScreen
                        />
                    )}
                    <p><strong>Precio:</strong>{" "}
                        {selectedGame.discount > 0 ? (
                            <>
                                <s>${selectedGame.basePrice}</s> {" "}
                                <b>${selectedGame.finalPrice}</b> ({selectedGame.discount}% OFF)
                            </>
                        ) : (
                            `$${selectedGame.basePrice}`
                        )}
                    </p>
                    <Btn onClick={() => handleAddToCart(selectedGame)}>Agregar al carrito</Btn>
                </ModalContent>
            </ModalContainer>
        </Backdrop>
    )
}

export default GamesDetailsModal;