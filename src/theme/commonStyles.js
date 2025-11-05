import styled from 'styled-components'

//estilos que se usan en más de 1 componente
const ProductsSection = styled.section`
    position: relative;
    width: 80%;
    margin: 75px auto 35px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;

    .loading-img{
        width: 75%;
        margin: 0 auto;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
        justify-items: center;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`

const Game = styled.article`
    max-width: 270px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-content: center;

    .game-title{
        cursor: pointer;
        transition: all .3s ease;

        &:hover{
            color: ${({theme}) => theme.txtSecondary};
            transform: scale(1.05);
        }

        &:active{
            transform: scale(0.8);
        }
    }

    & div, img {
        box-shadow: 0 0 15px rgba(255, 153, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    & div {
        max-width: 270px;
        padding: 7px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border-radius: 0 0 7px 7px;
        border-top: unset;
        transition: background 0.4s ease, color 0.4s ease;
        color: ${({theme}) => theme.txtSecondary};
        background: linear-gradient(180deg, ${({theme}) => theme.surface} 0%, ${({theme}) => theme.surfaceSecondary} 100%);

        button {
            background: linear-gradient(90deg, #ff9900, #ff4d00);
            color: #fff;
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

            /* &:hover {
                box-shadow: 0 0 20px rgba(255, 77, 0, 0.8);
                transform: scale(1.05);
            } */

            &:active {
                transform: scale(0.97);
            }
        }
    }

    & img {
        border-bottom: unset;
        max-width: 270px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 7px 7px 0 0;
    }

    /*hover para pc*/
    @media (hover: hover) and (pointer: fine){
        &:hover {
            transform: translate(-6px) scale(1.03);
        
            & > div {
                background: linear-gradient(180deg, #00e5ff80 0%, #001f3f66 100%);
                color: ${({theme}) => theme.txtPrimary};
            }
        
            & > div, img {
                box-shadow: 0 0 25px rgba(255, 77, 0, 0.5);
            }
        }
    
        & div button:hover{
            box-shadow: 0 0 20px rgba(255, 77, 0, 0.8);
            transform: scale(1.05);
        }

        & div button:active{
            transform: scale(0.9);
        }
    }

    /*hover tactil*/
    @media (pointer: coarse){
        & div button:active{
            transform: scale(0.9);
            box-shadow: 0 0 15px rgba(255, 153, 0, 0.6);
        }

        &:hover{
            transform: scale(1.05);
            & > div, img {
                box-shadow: 0 0 18px rgba(0, 229, 255, 0.5);
            }
        }
    }
`

export {
    ProductsSection,
    Game
}