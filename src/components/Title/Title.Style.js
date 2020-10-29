import { AvatarGroup } from "components/Avatar/Avatar.Style";
import { IconGroup } from "components/Icon/Icon.Style";

import { animated } from "react-spring";
import styled from "styled-components";

export const Titles = styled.div`
   display: grid;
`;

export const Actions = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   ${IconGroup} {
      cursor: pointer;
   }
`;

export const TitleGroup = styled(animated.div)`
   display: grid;
   grid-template-columns: 64px 1fr 135px;
   padding: 25px 6px;
   max-height: 110px;
   z-index: 999;
   
   ${AvatarGroup} {
      cursor: pointer;
   }
`;