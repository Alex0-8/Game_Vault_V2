import styled from 'styled-components'

const HeaderSection = styled.header`
    width: 100%;
    padding: 15px 25px;
    background-color: ${({theme}) => theme.backgroundSecondary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
        width: 50px;
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: all .3s ease;

        img {
            width: 100%;
        }

        div{
            width: 30px;
            height: 30px;
            padding: 6px;
            border-radius: 50%;
            background-color: aqua;
            position: absolute;
            right: 0;
            top: 0;
            text-align: center;
        }

        &:hover{
            transform: scale(1.2);
        }

        &:active{
            transform: scale(.9);
        }
    }

    & img:nth-child(2){
        width: clamp(3.75rem, 2.634rem + 2.976vw, 5.313rem);
    }

    & .number-styles{
        padding: 10px;
        background-color: #12e712;
        font-weight: 400;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        font-size: 15px;
        position: absolute;
        top: -5px;
        right: -5px;
    }
`

export {
    HeaderSection,
}