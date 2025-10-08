import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/globalStyles.js";
import Header from "./Components/header";
import Banner from "./Components/Banner/index.js";
import Products from "./Components/Products/index.js";
import Cart from "./Components/Cart/index.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartAmount, setCartCounter, setCartItems } from "./redux/slices/gameSlice.js";

function App() {
  const [isOpen, setIsOpen] = useState(false) // guarda el estado de abierto y cerrado del carrito
  const dispatch = useDispatch();

  useEffect(() => { // busca el item 'cart' dentro del local storage al entrar a la pagina
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(setCartItems(stored));

    const totalCount = stored.reduce((acc, game) => acc + (game.quantity || 0), 0)
    console.log("el totalcount del app: ", totalCount)
    dispatch(setCartCounter(totalCount))

    const totalAmount = stored // maneja el monto total de los productos
      .reduce((acc, game) => acc + game.price * game.quantity, 0)
      .toFixed(2)

    dispatch(setCartAmount(totalAmount))
  
  }, [dispatch])
  
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
        <Header onToggle={() => setIsOpen(!isOpen)} />
        <Banner />
        <Products />
        <Cart isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}/>
    </ThemeProvider>
  );
}

export default App;
