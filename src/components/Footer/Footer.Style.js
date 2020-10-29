import { InputGroup } from "components/Input/Input.Style";

import { animated } from "react-spring";
import styled from "styled-components";

export const SuffixIconContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   & > * {
      margin-left: 16px;
   }
`;

export const PopoverContainer = styled.div`
   display: flex;
   align-items: center;
   
   & > * {
      margin: 0 8px;
      font-size: 24px;
   }
`;

export const FooterGroup = styled(animated.footer)`
   box-sizing: border-box;
   padding: 12px;
   width: 100%;
   border-top: 1px solid ${({theme}) => theme.lineColor};
   
   & > ${InputGroup} {
     padding: 6px 0;
   }
`;