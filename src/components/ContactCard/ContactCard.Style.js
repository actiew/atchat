import { AvatarGroup } from "components/Avatar/Avatar.Style";

import { Paragraph } from "components/Paragraph/Paragraph";
import styled from "styled-components";

export const Name = styled(Paragraph).attrs({size: "twenty"})`
   grid-area: name;
`;

export const Intro = styled(Paragraph).attrs({type: "normal"})`
   grid-area: intro;
   font-size: ${({theme}) => theme.fourteen};
`;

export const ContactCardGroup = styled.div`
   display: grid;
   grid-template-areas: "avatar name" "avatar intro";
   grid-template-columns: 62px auto;
   padding: 12px 0;
   border-bottom: 1px solid ${({theme}) => theme.darkColor};
   ${AvatarGroup} {
      grid-area: avatar;
   }
`;