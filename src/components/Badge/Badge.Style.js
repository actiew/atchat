import { redColor, whitestColor } from "src/theme/theme";

import { circle } from "src/utils/mixins";
import styled, { css } from "styled-components";


const variants = {
   dot: css`
      position: relative;
      padding: 6px;

      &::before {
         content: "";
         display: ${({ isShow }) => isShow
            ? "block"
            : "none"};
         position: absolute;
         top: 0;
         right: 0;
         width: 9px;
         height: 9px;
         ${circle(redColor)};
      }
   `,

   default: css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      ${circle(redColor)};
      ${({
         count,
         showZero,
      }) => !showZero && count === 0 && `visibility: hidden`};
   `,
};

export const Count = styled.span`
   color: ${whitestColor};
   font-size: 16px;
   font-weight: 700;
`;

export const BadgeGroup = styled.div`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   ${({ variant }) => variants[variant]};
`;
