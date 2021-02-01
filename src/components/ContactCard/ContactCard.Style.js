import { AvatarGroup } from "src/components/Avatar/Avatar.Style";

import { Paragraph } from "src/components/Paragraph/Paragraph";
import { fourteen, twenty, whiteColor } from "src/theme/theme";
import styled from "styled-components";


export const Name = styled(Paragraph)
.attrs({ size: twenty })`
   grid-area: name;
`;

export const Intro = styled(Paragraph)
.attrs({ type: "normal" })`
   grid-area: intro;
   font-size: ${fourteen};
`;

export const ContactCardGroup = styled.div`
   display: grid;
   grid-template-areas: "avatar name" "avatar intro";
   grid-template-columns: 62px auto;
   padding: 1.2rem 1.6rem;
   border-bottom: 1px solid ${whiteColor};

   ${AvatarGroup} {
      grid-area: avatar;
   }
`;
