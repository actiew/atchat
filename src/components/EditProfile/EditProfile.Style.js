import { AvatarGroup } from "components/Avatar/Avatar.Style";
import { ButtonGroup } from "components/Button/Button.Style";

import { Text } from "components/Text/Text";
import styled from "styled-components";

export const TitleGroup = styled(Text).attrs({size: "twenty"})`
   display: block;
   align-self: end;
   :nth-of-type(n+2) {
      margin-top: 30px;
   }
`;

export const SelectGroups = styled.div`
   display: flex;
   justify-content: space-evenly;
`;

export const InformationGroup = styled.div`
   overflow-y: auto;
   
   ::-webkit-scrollbar {
      display: none;
   };
   
   & > label {
      margin: 20px 0;
   }
`;

export const ButtonGroups = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin: 15px 0;

   ${ButtonGroup} {
      justify-self: center;
   };
`;

export const EditProfileGroup = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   padding: 30px;
   row-gap: 20px;
   height: 100%;
   overflow: hidden;
   
   ${AvatarGroup} {
      justify-self: center;
   };
`;