import {
   blackColor,
   eight,
   eighteen,
   fourteen,
   mainColor,
   redColor,
   sixteen,
   ten,
   twelve,
   twenty,
   twentyTwo,
} from "src/theme/theme";
import styled, { css } from "styled-components";


export const typeVariants = {
   primary: css`
      color: ${mainColor};
   `,
   normal: css`
      color: ${blackColor};
   `,
   danger: css`
      color: ${redColor};
   `,
};

export const sizeVariants = {
   eight: css`
      font-size: ${eight};
   `,
   ten: css`
      font-size: ${ten};
   `,
   twelve: css`
      font-size: ${twelve};
   `,
   fourteen: css`
      font-size: ${fourteen};
   `,
   sixteen: css`
      font-size: ${sixteen};
   `,
   eighteen: css`
      font-size: ${eighteen};
   `,
   twenty: css`
      font-size: ${twenty};
   `,
   twentyTwo: css`
      font-size: ${twentyTwo};
   `,
};

export const TextGroup = styled.span`
   ${({ type }) => typeVariants[type]};
   ${({ size }) => sizeVariants[size]};
   ${({ bold }) => bold && `font-weight: 500`};
`;
