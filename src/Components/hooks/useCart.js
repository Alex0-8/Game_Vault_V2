import { useDispatch, useSelector } from "react-redux"
import { setCartAmount, setCartCounter, setCartItems } from "../../redux/slices/gameSlice";

export const useCart = () => {
    const dispatch = useDispatch();
    const { cartList, cartCount, cartAmount } = useSelector((state) => state.games)

    //actualiza el carrito y su contador
    const updateCart = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
        dispatch(setCartItems(newCart));

        const totalCount = newCart.reduce((acc, game) => acc + game.quantity, 0);
        dispatch(setCartCounter(totalCount)) // maneja la cantidad de productos en el carrito
        console.log(cartCount)

        const totalAmount = newCart // maneja el monto total de los productos
            .reduce((acc, game) => acc + game.price * game.quantity, 0)
            .toFixed(2)

        dispatch(setCartAmount(totalAmount))
    }

    // añadir un item
    const addToCart = (game) => {
        const cart = [...cartList];
        const existingIndex = cart.findIndex((item) => item.id === game.id);

        if(existingIndex !== -1){
            const updateGame = {
                ...cart[existingIndex],
                quantity: (cart[existingIndex].quantity || 0) + 1
            }
            cart[existingIndex] = updateGame;
        }else{
            cart.push({ ...game, quantity: 1 })
        }

        updateCart(cart);
    };

    // quitar solo 1 de un item
    const removeOne = (id) => {
        const cart = cartList.map((game) => {
            if(game.id === id){
                if(game.quantity > 1){
                    return { ...game, quantity: game.quantity - 1 }
                }
                return null;
            }
            return game;
        }).filter(Boolean);

        updateCart(cart);
    };

    // quitar el item completo sin immportar cantidad
    const removeAllOfOne = (id) => {
        const cart = cartList.filter((game) => game.id !== id);
        updateCart(cart)
    };

    // vaciar el carrito
    const clearCart = () => {
        updateCart([])
        localStorage.removeItem('cart')
    };

    return { cartList, cartCount, addToCart, removeOne, removeAllOfOne, clearCart, cartAmount }
}