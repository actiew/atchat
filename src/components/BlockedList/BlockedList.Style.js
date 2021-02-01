import { Avatar } from "src/components/Avatar/Avatar";
import { Button } from "src/components/Button/Button";
import { IconGroup } from "src/components/Icon/Icon.Style";
import { Text } from "src/components/Text/Text";
import { twenty } from "src/theme/theme";
import styled from "styled-components";


export const BlockedAvatar = styled(Avatar)`
   grid-area: avatar;
`;

export const BlockedName = styled(Text)
.attrs({ size: twenty })`
   margin: 20px 0 0;
   grid-area: name;
`;

export const CloseButton = styled(Button)`
   margin: 10px 0 0;
   grid-area: 2 / 3 / 4 / 4;
   z-index: 10;
`;

export const CloseableAvatar = styled.div`
   display: grid;
   grid-template-areas:
      "avatar avatar avatar"
      "avatar avatar avatar"
      "avatar avatar avatar"
      "name name name";
   justify-items: center;
   width: fit-content;
`;

export const FriendList = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   row-gap: 24px;
   justify-items: center;
   overflow-y: auto;

   ::-webkit-scrollbar {
      display: none;
   }
`;

export const SettingMenu = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   height: 108px;

   ${IconGroup} {
      position: absolute;
      left: 0;
   }
`;

export const BlockedListGroup = styled.div`
   padding: 0 10px;
   height: 100%;
   box-sizing: border-box;
`;
