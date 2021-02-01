import { ButtonGroup } from "src/components/Button/Button.Style";
import { greenColor, redColor } from "src/theme/theme";

import { circle } from "src/utils/mixins";
import styled, { css } from "styled-components";


const circleMixinFunction = color => css`
   content: "";
   display: inline-block;
   position: absolute;
   right: ${({ size }) => (size / 40)}px;
   bottom: ${({ size }) => (size / 40)}px;
   width: ${({ size }) => size / 4}px;
   height: ${({ size }) => size / 4}px;
   ${circle(color)};
`;

export const AvatarImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center;
   border-radius: 50%;
`;

export const AvatarGroup = styled.div`
   position: relative;
   width: ${({ size }) => size}px;
   height: ${({ size }) => size}px;

   &::before {
      ${({ status }) => {
         if (status === "online") {
            return circleMixinFunction(greenColor);
         } else if (status === "offline") {
            return circleMixinFunction(redColor);
         } else {
            return null;
         }
      }};
   }

   ${ButtonGroup} {
      position: absolute;
      right: 0;
      bottom: 0;
   }
`;
