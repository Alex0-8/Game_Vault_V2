import React from "react";
import { CartInfo, CartItem, CartItemsSection, CartSection } from "./styles";
import { useCart } from "../hooks/useCart";

const Cart = ({ isOpen, onToggle }) => {
    const { cartList, cartAmount, removeOne, removeAllOfOne, clearCart} = useCart();

    return(
        <CartSection className={`${isOpen ? "show-cart" : ""}`}>
            <CartInfo>
                <h2>CARRITO</h2>
                <button onClick={clearCart} >Quitar todo</button>
                <i onClick={onToggle}>X</i>
            </CartInfo>

            <CartItemsSection>
                {cartList.map((game) => (
                    <CartItem key={game.id}>
                        <img src={game.coverUrl === null ? `https://placehold.co/300x400?text=${'"Image Error"'}`: game.coverUrl} alt={game.title}/>

                        <p className="game-name">{game.title}</p>
                        <p>Precio: {game.price}</p>    
                        <p>{game.quantity > 1 ? `Cantidad: ${game.quantity}` : ""}</p>                    
                        <button onClick={() => removeOne(game.id)}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                        {game.quantity > 1 ? <button onClick={() => removeAllOfOne(game.id)}>quitar todo</button> : ""}
                    </CartItem>
                ))}
            </CartItemsSection>
        
            <section>
                <p>Total:</p>
                <p>${cartAmount}</p>
            </section>
        </CartSection>
    )
}

export default Cart;