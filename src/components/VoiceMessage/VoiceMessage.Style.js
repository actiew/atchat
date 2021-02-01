import { ButtonGroup } from "src/components/Button/Button.Style";
import { IconGroup } from "src/components/Icon/Icon.Style";
import { TextGroup } from "src/components/Text/Text.Style";
import { mainColor, whitestColor } from "src/theme/theme";
import styled, { css } from "styled-components";


export const typeVariants = {
   mine: css`
      background: ${mainColor};

      & > ${IconGroup} {
         fill: ${whitestColor}
      }

      & > ${IconGroup} path {
         fill: ${whitestColor};
      }

      & > ${TextGroup} {
         color: ${whitestColor};
      }
   `,
};

export const VoiceMessageGroup = styled.div`
   & > ${ButtonGroup} {
      display: grid;
      grid-template-columns: 40px 1fr 60px;
      background: #AAAAAA;
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
         color: ${mainColor};
      }

      ${({ type }) => type && typeVariants[type]};
   }
`;
