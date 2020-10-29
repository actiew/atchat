import { HeadingGroup } from "components/Heading/Heading.Style";
import styled from "styled-components";

export const SettingIcon = styled.div`

`;

export const SettingItemControl = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const SettingGroups = styled.div`
   padding: 12px 24px;
`;

export const SettingGroup = styled.div`
   height: 100%;
   overflow-y: auto;
   
   ::-webkit-scrollbar {
      display: none;
   }

   a {
      color: inherit;
      text-decoration: none;
   }
   
   ${HeadingGroup} {
      padding: 50px 0 24px;
      font-size: 24px;
      text-align: center;
   }
`;