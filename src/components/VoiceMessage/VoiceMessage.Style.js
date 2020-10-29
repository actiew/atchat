import { ButtonGroup } from "components/Button/Button.Style";
import { IconGroup } from "components/Icon/Icon.Style";
import { TextGroup } from "components/Text/Text.Style";
import styled, { css } from "styled-components";

export const typeVariants = {
   mine: css`
      background: ${({theme}) => theme.primaryColor};
      
      & > ${IconGroup} {
         fill: ${({theme}) => theme.whiteColor}
      }
      
      & > ${IconGroup} path {
         fill: ${({theme}) => theme.whiteColor};
      }
      
      & > ${TextGroup} {
         color: ${({theme}) => theme.whiteColor};
      }
   `,
};

export const VoiceMessageGroup = styled.div`
   & > ${ButtonGroup} {
      display: grid;
      grid-template-columns: 40px 1fr 60px;
      background: #AAA;
      padding: 0;
      
      & > *:nth-child(2) {
         flex-shrink: 0;
         margin: 0 6px;
         
         svg {
            width: 100%;
            height: 32px;
         }
      }
      
      & > ${TextGroup} {
         color: ${({theme}) => theme.primaryColor};
      }
      
      ${({type}) => type && typeVariants[type]};
   }
`;