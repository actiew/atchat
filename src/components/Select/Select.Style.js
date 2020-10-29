import ArrowDown from "resources/icon/arrow-down.svg";
import Arrow_Down from "resources/icon/arrowdown.svg";
import styled, { css } from "styled-components";

export const typeVariants = {
   form: css`
      background-image: url(${Arrow_Down});
   `,
};

export const SelectGroup = styled.select`
   appearance: none;
   background-image: url(${ArrowDown});
   background-size: 14px;
   background-repeat: no-repeat;
   background-position: right center;
   background-color: transparent;
   border: none;
   padding-right: 18px;
   font-size: ${({theme}) => theme.sixteen};
   color: ${({theme}) => theme.primaryColor};
   outline: none;
   ${({type}) => type && typeVariants[type]};
   
   ::-ms-expand {
      display: none;
   }
`;