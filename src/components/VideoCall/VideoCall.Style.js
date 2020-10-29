import { Avatar } from "components/Avatar/Avatar";
import { AvatarGroup } from "components/Avatar/Avatar.Style";
import { Button } from "components/Button/Button";
import { IconGroup } from "components/Icon/Icon.Style";
import { ParagraphGroup } from "components/Paragraph/Paragraph.Style";
import styled from "styled-components";

export const Actions = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 99px);
   grid-area: actions / title;
   align-self: end;
   justify-self: center;
`;

export const Action = styled(Button).attrs({shape: "circle", width: "64px", height: "64px"})`
   color: ${({theme}) => theme.whiteColor};
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
   top: 9vh;
   right: 1vw;
   padding: 12px 6px;
   width: max-content;
   border-radius: 3px;
   background: ${({theme}) => theme.darkColor};
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
   background: url(${({src}) => src}) center;
   background-size: cover;
`;