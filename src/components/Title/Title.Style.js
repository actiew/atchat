import { animated } from "react-spring";
import { AvatarGroup } from "src/components/Avatar/Avatar.Style";
import { IconGroup } from "src/components/Icon/Icon.Style";
import { whiterColor } from "src/theme/theme";
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
   background: ${whiterColor};
   z-index: 999;

   ${AvatarGroup} {
      cursor: pointer;
   }
`;
