import styled from 'styled-components'

const CartSection = styled.section`
    width: 570px;
    color: #fff;
    background-color: rgb(19, 19, 23);
    padding: 25px;
    border-radius: 7px;
    height: 100%;
    position: fixed;
    right: -100%;
    top: 100px;
    transition: all .3s ease;

    &.show-cart {
        right: 0;
    }

    & > section:last-child{
        display: flex;
        width: 100%;
        padding: 5px;
        justify-content: space-between;

        p{
            font-size: 28px;
        }
    }
`

const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & i {
        cursor: pointer;
        transition: all .3s ease;
        &:hover{
            transform: scale(1.2);
        }
    }
`

const CartItemsSection = styled.div`
    min-height: 65%;
    max-height: 65%;
    color: #000;
    border-radius: 8px;
    background-color: #6d6d6dff;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 7px;
        border-radius: 7px;
        background-color: #3aeffcff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 7px;
    }
`

const CartItem = styled.div`
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 15px;

    img {
        border-radius: 8px;
        width: 75px;
    }

    button{
        cursor: pointer;
        border: none;
        padding: 7px;
        border-radius: 7px;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.05);
        }
    }

    .game-name{
        max-width: 125px;
        overflow: auto;
    }
`

export {
    CartSection,
    CartInfo,
    CartItemsSection,
    CartItem
}