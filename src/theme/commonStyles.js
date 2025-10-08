import styled from 'styled-components'

//estilos que se usan en más de 1 componente
const ProductsSection = styled.section`
    width: 80%;
    margin: 0 auto 35px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;

    .loading-img{
        width: 75%;
        margin: 0 auto;
    }
`

const Game = styled.article`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-content: center;

    & div {
        max-width: 270px;
        background-color: #999999ff;
        padding: 7px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border-radius: 0 0 7px 7px;
        transition: all .3s ease;

        button {
            width: 100px;
            height: 35px;
            background-color: #ef3fffff;
            border-radius: 8px;
            border: none;
            cursor: pointer;

            &:active{
                transform: scale(.9);
                background-color: #3fffdfff;
            }

            &:hover {
                background-color: #c760f7ff;
            }
        }
    }

    & img {
        max-width: 270px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 7px 7px 0 0;
    }

    &:hover{
        & > div{
            background-color: #2b9aceff;
        }
    }
`

export {
    ProductsSection,
    Game
}