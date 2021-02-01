import { mainColor, whiteColor } from "src/theme/theme";
import styled, { css } from "styled-components";


const shapeVariants = {
   circle: css`
      border-radius: 50%;
   `,

   rect: css`
      padding: 6px 12px;
      border-radius: 6px;
   `,
};

const typeVariants = {
   primary: css`
      color: ${whiteColor};
      background: ${mainColor};
   `,
};

export const ButtonGroup = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   border: none;
   outline: none;
   cursor: pointer;
   font-size: ${({ fontSize }) => fontSize};
   font-weight: 500;
   ${({ shape }) => shapeVariants[shape]};
   ${({ type }) => typeVariants[type]};
   ${({ backgroundColor }) => `background: ${backgroundColor}`};
`;
