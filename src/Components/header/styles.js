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

        svg{
            stroke: ${({theme}) => theme.icon};
            
            &:hover{
                stroke: ${({theme}) => theme.iconHover};
            }
        }

        div{
            position: absolute;
            top: -5px;
            right: -5px;
            min-width: 20px;
            height: 20px;
            border-radius: 10px;
            padding: 0 5px;
            background-color: ${({theme}) => theme.btn};
            color: #000;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 8px ${({theme}) => theme.btn};
            border: 1px solid ${({theme}) => theme.backgroundPrimary};
        }

        &:hover{
            transform: scale(1.09);
        }

        &:active{
            transform: scale(.9);
        }
    }

    & img:nth-child(2){
        width: clamp(3.75rem, 2.634rem + 2.976vw, 5.313rem);
    }
`

export {
    HeaderSection,
}