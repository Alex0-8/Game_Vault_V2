import styled from 'styled-components'

//contenedor del carrito
const CartSection = styled.section`
    width: 570px;
    color: ${({theme}) => theme.txtPrimary};
    background: ${({theme}) => theme.cartBkg};
    padding: 25px;
    border-radius: 10px 0 0 10px;
    height: 100%;
    position: fixed;
    right: -200%;
    top: 0;
    transition: transform .4s ease-in-out, opacity .3s ease-in-out, right .4s ease-in-out;
    box-shadow: ${({theme}) => theme.cartBoxShadow};
    z-index: 999;
    border-left: 2px solid ${({theme}) => theme.cartBorder};
    backdrop-filter: blur(6px);
    transform: translateX(100%);
    opacity: 0;

    &.show-cart {
        right: 0;
        transform: translateX(0);
        opacity: 1;
    }

    & > section:last-child{
        background: linear-gradient(90deg, #ff9900, #ff4d00);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.8rem;
        font-weight: 800;
        display: flex;
        width: 100%;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 10px;

        p{
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    @media (max-width: 600px){
        width: 100%;
        border-radius: 0;
    }
`
//encabezado del carrito
const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 77, 0, 0.5);

    h2{
        font-size: 1.8rem;
        background: ${({theme}) => theme.cartHeaderGradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 1px;
        font-weight: 800;
    }

    & > button {
        background: rgba(255, 77, 0, 0.18);
        color: #ff9900;
        border: 1px solid rgba(255, 153, 0, 0.5);
        border-radius: 7px;
        padding: 7px 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all .3s ease;
        box-shadow: 0 0 8px rgba(255, 153, 0, 0.5);

        &:hover{
            background: linear-gradient(90deg, #ff9900, #ff4d00);
            color: ${({theme}) => theme.txtPrimary};
            box-shadow: 0 0 15px rgba(255, 77, 0, 0.6), 0 0 25px rgba(255, 153, 0, 0.6);
        }
    }

    & i {
        cursor: pointer;
        transition: transform .3s ease, color .3s ease;
        font-size: 1.4rem;
        color: #ff9900;

        &:hover{
            transform: scale(1.2);
            color: #ff4d00;
        }
    }
`

//seccion de items
const CartItemsSection = styled.div`
    min-height: 65%;
    max-height: 65%;
    color: ${({theme}) => theme.txtPrimary};
    border-radius: 10px;
    background: ${({theme}) => theme.cartItemBackground};
    backdrop-filter: blur(8px);
    overflow-y: auto;
    margin-top: 15px;
    padding: 10px;
    box-shadow: inset 0 0 10px rgba(0, 229, 255, 0.2);

    &::-webkit-scrollbar {
        width: 7px;
        border-radius: 7px;
        background-color: rgba(0, 229, 255, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 77, 0, 0.7);
        border-radius: 7px;
    }
`

//cada item del carrito
const CartItem = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 12px;
    transition: background .3s ease;

    &:hover{
        background: ${({theme}) => theme.cartItemHoverGradient};
    }

    img {
        border-radius: 7px;
        width: 70px;
        box-shadow: 0 0 10px rgba(255, 77, 0, 0.3);
    }

    button{
        cursor: pointer;
        border: none;
        padding: 7px;
        border-radius: 7px;
        transition: all .3s ease;
        background: ${({theme}) => theme.cartButtonBackground};
        color: ${({theme}) => theme.txtPrimary};

        &:hover{
            transform: scale(1.05);
            background: linear-gradient(90deg, #ff9900, #ff4d00);
            box-shadow: 0 0 10px rgba(255, 77, 0, 0.6);
        }
    }

    .game-name{
        max-width: 125px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${({theme}) => theme.txtSecondary};
        font-weight: 600;
    }
`

export {
    CartSection,
    CartInfo,
    CartItemsSection,
    CartItem
}