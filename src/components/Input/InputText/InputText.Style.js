import styled from "styled-components";

export const InputUnderline = styled.input`
   padding: 3px 9px;
   width: 100%;
   height: 24px;
   border: none;
   outline: none;
   font-size: ${({theme}) => theme.sixteen};
   border-bottom-width: 2px;
   border-bottom-style: solid;
   border-bottom-color: ${({theme}) => theme.grayColor};
   background: transparent;
   
   &::placeholder {
      color: ${({theme}) => theme.darkColor};
   }
   
   &:focus {
      border-bottom-color: ${({theme}) => theme.primaryColor};
   }
`;

export const InputTextGroup = styled.div`
   margin: 15px 0;
`;