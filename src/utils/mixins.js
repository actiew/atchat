import { css } from "styled-components";

export const circle = (color) => css`
   border-radius: 50%;
   background: ${color};
`;

export const activeBar = (width) => css`
   &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      width: ${width}px;
      height: 100%;
      background: ${({theme}) => theme.redColor};
      transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1);
   }
`;