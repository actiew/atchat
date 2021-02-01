import { whiterColor } from "src/theme/theme";
import styled from "styled-components";


export const FilterListGroup = styled.div`
   position: relative;

   & > *:first-child {
      padding: 2.9rem 1.6rem;
      background: ${whiterColor};
   }

   & > *:last-child {
      height: calc(100% - 146px);
      overflow-y: auto;

      ::-webkit-scrollbar {
         display: none;
      }
   }
`;
