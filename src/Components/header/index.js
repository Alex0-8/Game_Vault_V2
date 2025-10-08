import React from "react";
import IconMenu from '../../Img/menu.png'
import IconCart from '../../Img/carrito.png'
import Logo from '../../Img/logo.webp'
import { HeaderSection } from "./styles";
import { useSelector } from "react-redux";

const Header = ({ onToggle }) => {
    const cartCount = useSelector((state) => state.games.cartCount)

    return (
        <HeaderSection>
            <i><img src={IconMenu} alt="menú"/></i>
            <img src={Logo}  alt="logo principal"/>

            {/* // lleva la cuenta de cuantos items hay dentro del carrito */}
            <div>
                <i onClick={onToggle} ><img src={IconCart} alt="carrito de compras"/><div>{cartCount}</div></i>
            </div>
        </HeaderSection>
    )
}

export default Header;