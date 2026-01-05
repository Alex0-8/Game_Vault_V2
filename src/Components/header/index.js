import React from "react";
import IconCart from '../../Img/carrito.png'
import Logo from '../../Img/logo.webp'
import { HeaderSection } from "./styles";
import { useSelector } from "react-redux";

const Header = ({ onToggle, switchTheme, isDark }) => {
    const cartCount = useSelector((state) => state.games.cartCount)

    return (
        <HeaderSection>
            {/* cambiar tema claro/oscuro */}
            {isDark ? 
            <i onClick={switchTheme}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></i> 
            : 
            <i onClick={switchTheme}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></i> 
            }

            <img src={Logo}  alt="logo principal"/>

            {/* // lleva la cuenta de cuantos items hay dentro del carrito */}
            <div $cartcount={cartCount}>
                <i onClick={onToggle} ><img src={IconCart} alt="carrito de compras"/><div>{cartCount}</div></i>
            </div>
        </HeaderSection>
    )
}

export default Header;