import { Icon } from "src/components/Icon/Icon";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import { Text } from "src/components/Text/Text";
import { mainColor, sixteen } from "src/theme/theme";
import styled, { css } from "styled-components";


export const Time = styled(Paragraph)
.attrs({
   type: "normal",
   size: "fourteen",
})`
   margin: 6px;
   word-spacing: 5px;
`;

export const BubbleTip = styled(Icon)`
   position: absolute;
   top: 0;
   left: -6px;
`;

export const Bubble = styled.div`
   position: relative;
   padding: 8px 12px;
   min-width: 45px;
   width: fit-content;
   max-width: 100%;
   border-radius: 0 9px 9px 9px;
   background: #AAAAAA;
   z-index: 99;
`;

export const MessageText = styled(Text)`
   font-size: ${sixteen};
   line-height: 1.5;
`;

export const typeVariants = {
   mine: css`
      ${Bubble} {
         justify-self: end;
         border-radius: 9px 0 9px 9px;
         background: ${mainColor};
      }

      ${BubbleTip} {
         transform: rotateY(180deg);
         left: unset;
         right: -6px;
      }

      path {
         fill: ${mainColor};
      }

      ${Time} {
         margin: 6px;
         text-align: right;
      }

      ${MessageText} {
         color: #FFFFFF;
      }
   `,
};

export const ChatBubbleGroup = styled.div`
   display: grid;
   grid-template-rows: 36px 1fr;
   ${({ type }) => type && typeVariants[type]};
`;
