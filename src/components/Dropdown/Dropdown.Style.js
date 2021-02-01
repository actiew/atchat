import { ParagraphGroup } from "src/components/Paragraph/Paragraph.Style";
import { routineColor, whitestColor } from "src/theme/theme";
import styled from "styled-components";


export const DropdownItem = styled.div`
   padding: 6px 24px;
   cursor: pointer;

   ${ParagraphGroup} {
      font-size: 16px;
   }
`;

export const DropdownContainer = styled.div`
   display: ${({ visible }) => (visible
      ? "block"
      : "none")};
   position: absolute;
   padding: 6px 0;
   border-radius: 5px;
   color: ${whitestColor};
   font-weight: 600;
   white-space: nowrap;
   background: ${routineColor};
   ${({ align }) => align}: 0;
`;

export const DropdownGroup = styled.div`
   position: relative;
   z-index: 888;
`;
