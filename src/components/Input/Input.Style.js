import { blackColor, blackestColor, whitestColor } from "src/theme/theme";
import styled from "styled-components";


export const InputContainer = styled.input`
   padding: 6px 15px;
   width: 100%;
   height: 40px;
   color: ${blackColor};
   font-size: 18px;
   outline: none;
   border-radius: 24px;
   border: none;
   background: ${whitestColor};

   &:focus {
      color: ${blackestColor};
   }

   &::-webkit-search-cancel-button {
      display: none;
   }
`;

export const Suffix = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   & > * {
      margin: 0 6px;
   }
`;

export const Prefix = styled.div`
   display: flex;
   padding: 0 8px 0 0;
   align-items: center;
   justify-content: center;
`;

export const InputGroup = styled.div`
   display: flex;
   align-items: center;
   padding: 12px 0;
`;
