import { mainColor, sixteen } from "src/theme/theme";
import styled from "styled-components";


export const Circle = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   width: 16px;
   height: 16px;
   line-height: 16px;
   border: 1px solid ${mainColor};
   border-radius: 50%;

   ::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${mainColor};
      opacity: 0;
      transform: scale(0.5);
      transition: 0.1s ease-in-out;
   }
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
   width: 0;
   height: 0;
   opacity: 0;

   :checked + ${Circle}::after {
      opacity: 1;
      transform: scale(1);
   }

   :not(:checked) + ${Circle}::after {
      opacity: 0;
      transform: scale(0.5);
   }
`;

export const RedioGroups = styled.div`
   display: flex;
   justify-content: space-around;
`;

export const RadioGroup = styled.label`
   display: flex;
   align-items: center;
   position: relative;
   padding-left: 24px;
   font-size: ${sixteen};
   line-height: 18px;
   cursor: pointer;
`;
