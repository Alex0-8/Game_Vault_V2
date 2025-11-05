import styled, { keyframes } from "styled-components"


const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.9);
    }
    to{
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: ${({theme}) => theme.modalBackdrop};
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`

const ModalContainer = styled.div`
    background: ${({theme}) => theme.modalBkg};
    color: ${({theme}) => theme.txtPrimary};
    border: 2px solid ${({theme}) => theme.modalBorder};
    box-shadow: ${({theme}) => theme.modalBoxShadow};
    border-radius: 10px;
    width: 48%;
    height: 95%;
    max-width: 800px;
    animation: ${fadeIn} 0.25s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1024px){
        width: 65%;
        height: 90%;
    }

    @media screen and (max-width: 768px){
        width: 80%;
        height: 90%;
    }

    @media screen and (max-width: 425px){
        width: 95%;
        height: 92%;
        border-radius: 8px;
    }
`

const ModalHeader = styled.div`
    background:  ${({theme}) => theme.cartHeaderGradient};
    padding: 1rem 1.2rem;
    height: 58%;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({theme}) => theme.txtPrimary};
    text-shadow: ${({theme}) => theme.modalTextGlow};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img{
        width: 92%;
        border-radius: 10px;
        box-shadow: ${({theme}) => theme.cartBoxShadow};
        object-fit: cover;
        max-height: 100%;
    }

    button{
        position: absolute;
        right: 5px;
        top: 0px;
        color: #000;
    }

    @media screen and (max-width: 768px){
        height: 50%;
        padding: 0.8rem;
    }

    @media screen and (max-width: 425px){
        padding: 5px 10px;
        height: clamp(175px, 55vw, 230px);

        img{
            width: 100%;
            border-radius: 8px;
        }
    }
`

const ModalContent = styled.div`
    padding: 1.5rem;
    display: flex;
    height: 270px;
    overflow-y: auto;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    scrollbar-width: thin;

    &::-webkit-scrollbar{
        width: 6px;
    }

    &::-webkit-scrollbar-thumb{
        background: rgba(255, 153, 0, 0.5);
        border-radius: 10px;
    }

    .price {
        font-weight: 700;
        font-size: 1.2rem;
        color: ${({theme}) => theme.txtSecondary};
    }

    button{
        background: linear-gradient(90deg, #ff9900, #ff4d00);
        color: #fff;
        width: 200px;
        border: none;
        border-radius: 10px;
        margin: 15px 15px;
        padding: 12px 20px;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        box-shadow: 0 0 12px rgba(255, 153, 0, 0.6);
        align-self: center;

        &:hover {
            box-shadow: 0 0 20px rgba(255, 77, 0, 0.8);
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.97);
        }
    }

    @media screen and (max-width: 768px){
        padding: 1.2rem;
        height: auto;
    }

    @media screen and (max-width: 425px){
        padding: 1rem;
        gap: 0.8rem;
    }

    @media screen and (max-width: 320px){
        button{
            font-size: 0.85rem;
            padding: 8px 0;
        }
    }
`

const Btn = styled.button`
    background: transparent;
    color: ${({theme}) => theme.txtPrimary};
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.2 ease;

    &:hover{
        transform: scale(1.05);
        color: ${({theme}) => theme.txtSecondary};
    }

    @media screen and (max-width: 425px){
        font-size: 1.3rem;
    }
`

export {
    Backdrop,
    ModalContainer,
    ModalHeader,
    ModalContent,
    Btn   
}