import { AvatarGroup } from "components/Avatar/Avatar.Style";

import { Icon } from "components/Icon/Icon";
import { TextGroup } from "components/Text/Text.Style";
import styled from "styled-components";

export const SocialLinks = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 15px 0;
   
   & > * {
      margin: 0 9px;
   }
`;

export const ContactSection = styled.section`
   display: grid;
   row-gap: 18px;
   margin: 20px 0;
`;

export const AlbumSection = styled.section``;

export const AlbumTitle = styled.div`
   display: flex;
   align-items: center;
   justify-self: stretch;
   justify-content: space-between;
   
   & > ${TextGroup} {
      color: ${({theme}) => theme.grayColor};
   }
   
   & > a {
      display: flex;
      align-items: center;
      font-size: ${({theme}) => theme.sixteen};
      text-decoration: none;
   }
`;

export const Album = styled.div`
   box-sizing: border-box;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10px;
   margin-top: 15px;
   justify-self: start;
   width: 100%;
`;

export const Photo = styled.img`
   width: 76px;
   object-fit: cover;
`;

export const CloseIcon = styled(Icon).attrs({opacity: 0.9, width: "18px"})`
   position: absolute;
   top: 12px;
   right: 15px;
   cursor: pointer;
`;

export const ProfileGroup = styled.div`
   display: grid;
   grid-gap: 9px;
   align-content: start;
   justify-items: center;
   justify-content: center;
   position: relative;
   padding: 0 9px;
   height: 100%;
   background: ${({theme}) => theme.lineColor};
   overflow-y: auto;
   
   ${AvatarGroup} {
      margin-top: 50px;
   }
   
   &::-webkit-scrollbar {
      display: none;
   }
`;