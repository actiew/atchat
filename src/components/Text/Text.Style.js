import styled, { css } from "styled-components";

export const typeVariants = {
   primary: css`
      color: ${({theme}) => theme.primaryColor};
   `,
   normal: css`
      color: ${({theme}) => theme.grayColor};
   `,
   danger: css`
      color: ${({theme}) => theme.redColor};
   `,
};

export const sizeVariants = {
   eight: css`
      font-size: ${({theme}) => theme.eight};
   `,
   ten: css`
      font-size: ${({theme}) => theme.ten};
   `,
   twelve: css`
      font-size: ${({theme}) => theme.twelve};
   `,
   fourteen: css`
      font-size: ${({theme}) => theme.fourteen};
   `,
   sixteen: css`
      font-size: ${({theme}) => theme.sixteen};
   `,
   eighteen: css`
      font-size: ${({theme}) => theme.eighteen};
   `,
   twenty: css`
      font-size: ${({theme}) => theme.twenty};
   `,
   twentyTwo: css`
      font-size: ${({theme}) => theme.twentyTwo};
   `,
};

export const TextGroup = styled.span`
   ${({type}) => typeVariants[type]};
   ${({size}) => sizeVariants[size]};
   ${({bold}) => bold && `font-weight: 500`};
`;