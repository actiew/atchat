import { AvatarGroup } from "components/Avatar/Avatar.Style";

import { Badge } from "components/Badge/Badge";
import { Paragraph } from "components/Paragraph/Paragraph";
import { Text } from "components/Text/Text";
import styled, { css } from "styled-components";

export const Name = styled(Text).attrs({size: "twenty"})`
   grid-area: name;
`;

export const Time = styled(Text).attrs({size: "sixteen", type: "normal"})`
   grid-area: time;
   justify-self: end;
`;

export const Message = styled.div`
   display: grid;
   grid-area: message;
   grid-template-columns: 1fr 30px;
   align-items: center;
`;

export const MessageText = styled(Paragraph).attrs({ellipsis: true})`
   align-self: end;
`;

export const UnreadBadge = styled(Badge)`
   align-self: end;
   justify-self: end;
`;

export const MessageCardGroup = styled.div`
   display: grid;
   padding: 15px 6px;
   grid-template-areas: "avatar name time" "avatar message message";
   grid-template-columns: 86px 1fr 1fr;
   border-bottom: 1px solid ${({theme}) => theme.lineColor};
   
   ${AvatarGroup} {
      grid-area: avatar;
   };
   
   ${({active}) => active &&
   css`
      background: ${({theme}) => theme.gray9Color};
      ${Name}, ${Time}, ${MessageText} {
         color: ${({theme}) => theme.whiteColor};
      };
      ${Time} {
         opacity: 0.6;
      };
      overflow: hidden;
      `
};
`;