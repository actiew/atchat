import { Avatar } from "src/components/Avatar/Avatar";
import { AvatarGroup } from "src/components/Avatar/Avatar.Style";
import { Button } from "src/components/Button/Button";
import { IconGroup } from "src/components/Icon/Icon.Style";
import { ParagraphGroup } from "src/components/Paragraph/Paragraph.Style";
import { greenColor, whiterColor, whitestColor } from "src/theme/theme";
import styled from "styled-components";


export const Actions = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 99px);
   grid-area: actions / title;
   align-self: end;
   justify-self: center;
`;

export const Action = styled(Button)
.attrs({
   shape: "circle",
   width: "64px",
   height: "64px",
})`
   color: ${whitestColor};
   font-size: 32px;
`;

export const Self = styled(Avatar)`
   grid-area: self;
   align-self: center;
   justify-self: end;
`;

export const Minimize = styled(Button)`
   padding: 0;
   grid-area: title;
   justify-self: end;
   width: 64px;
   height: 45px;
   font-size: 45px;
`;

export const VideoCallAlert = styled.div`
   display: grid;
   grid-template-areas: "avatar info info" "avatar action icon";
   row-gap: 6px;
   column-gap: 9px;
   align-items: center;
   position: absolute;
   top: 12vh;
   right: 0;
   padding: 12px 6px;
   width: max-content;
   border-radius: 3px;
   background: ${greenColor};
   cursor: pointer;
   z-index: 999;

   ${AvatarGroup} {
      grid-area: avatar;
   }

   ${ParagraphGroup} {
      grid-area: info;
   }

   ${ParagraphGroup}[type="normal"] {
      grid-area: action;
      align-self: end;
      color: ${whiterColor};
   }

   ${IconGroup} {
      grid-area: icon;
      align-self: end;
      justify-self: end;
      opacity: 0.6;
   }
`;

export const VideoCallGroup = styled.div`
   display: grid;
   grid-template-areas: "title title" "self self" "actions actions";
   padding: 9px 9px 45px;
   height: 100%;
   background: url(${({ src }) => src}) center;
   background-size: cover;
`;
