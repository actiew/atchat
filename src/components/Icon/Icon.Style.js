import styled from "styled-components";


export const IconGroup = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   cursor: pointer;

   svg,
   svg * {
      width: 100%;
      height: 100%;
      ${({ color }) => (color
         ? `fill: ${color}`
         : "")};
      ${({ opacity }) => (opacity
         ? `opacity: ${opacity}`
         : "")};
   }
`;
