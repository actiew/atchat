import { blackColor, blackestColor, mainColor, sixteen } from "src/theme/theme";
import styled from "styled-components";


export const InputUnderline = styled.input`
   padding: 3px 9px;
   width: 100%;
   height: 24px;
   border: none;
   outline: none;
   font-size: ${sixteen};
   border-bottom-width: 2px;
   border-bottom-style: solid;
   border-bottom-color: ${blackColor};
   background: transparent;

   &::placeholder {
      color: ${blackestColor};
   }

   &:focus {
      border-bottom-color: ${mainColor};
   }
`;

export const InputTextGroup = styled.div`
   margin: 15px 0;
`;
