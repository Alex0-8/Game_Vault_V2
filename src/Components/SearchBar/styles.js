import styled from "styled-components";

const SearchWrapper = styled.div`
  position: absolute;
  right: 77px;
  top: -35px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 586px) {
    top: -40px;
    right: 6vw;
  }
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.searchIcon};
  transition: all .3s ease;
  display: flex;
  align-items: center;

  &:hover{
    transform: scale(1.05);
    color: ${({theme}) => theme.searchIconHover};
    filter: drop-shadow(0 0 8px ${({theme}) => theme.searchIconHover});
  }

  &:active{
    transform: scale(0.9);
  }
`

const SearchContainer = styled.form`
  position: absolute;
  top: -25px;
  right: 25px;
  opacity: ${({$visible}) => $visible ? "1" : "0"};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: ${({theme}) => theme.searchBkg};
  border: 2px solid ${({theme}) => theme.searchBorder};
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.searchBoxShadow};
  transition: all .3s ease;
  animation: ${({ $visible }) => ($visible ? "fadeIn 0.25s ease": "fadeOut 0.25s ease")};
  pointer-events: ${({$visible}) => $visible ? "auto" : "none"};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(30px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes fadeOut {
    from{
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to{
      opacity: 0;
      transform: translateX(30px) scale(0.8);
    }
  }
`

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${({theme}) => theme.txtPrimary};
  font-size: 1rem;
  width: clamp(9.688rem, 7.679rem + 5.357vw, 12.5rem);
  padding: 6px;

  &::placeholder {
    color: ${({theme}) => theme.searchPlaceholder};
  }
`

const SubmitButton = styled.button`
  background: ${({theme}) => theme.searchButtonGradient};
  border: none;
  border-radius: 7px;
  padding: 8px 14px;
  color: ${({theme}) => theme.txtPrimary};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .25s ease;

  &:hover{
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${({theme}) => theme.searchButtonShadow};
  }

  &:active{
    transform: scale(.9);
  }
`

export {
  SearchWrapper,
  IconButton,
  SearchContainer,
  Input,
  SubmitButton,
}