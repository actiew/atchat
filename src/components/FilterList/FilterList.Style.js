import styled from "styled-components";

export const FilterListGroup = styled.div`
   position: relative;
   height: 100%;
   
   & > *:first-child {
      padding: 29px 0;
   }
   
   & > *:last-child {
      height: calc(100% - 146px);
      overflow-y: auto;
      
      ::-webkit-scrollbar {
         display: none;
      }
   }
`;