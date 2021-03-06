import { blackerColor } from "src/theme/theme";
import styled from "styled-components";


export const Filters = styled.div`
   display: flex;
   align-items: center;
   color: ${blackerColor};

   &:first-of-type > * {
      margin-right: 10px;
   }
`;

export const Action = styled.div`
   display: flex;
   align-items: center;
   justify-self: end;

   &:last-of-type > * {
      margin-left: 10px;
   }
`;

export const FilterGroup = styled.div`
   display: grid;
   grid-template-columns: 3fr 2fr;
   align-items: center;
   margin: 0 1.6rem
`;
