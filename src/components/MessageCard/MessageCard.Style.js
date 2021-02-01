import { AvatarGroup } from "src/components/Avatar/Avatar.Style";

import { Badge } from "src/components/Badge/Badge";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import { Text } from "src/components/Text/Text";
import { blackColor, sixteen, twenty, whiteColor, whitestColor } from "src/theme/theme";
import styled, { css } from "styled-components";


export const Name = styled(Text)
.attrs({ size: twenty })`
   grid-area: name;
   align-self: center;
`;

export const Time = styled(Text)
.attrs({
   size: sixteen,
   type: "normal",
})`
   grid-area: time;
   justify-self: end;
`;

export const Message = styled.div`
   display: grid;
   grid-area: message;
   grid-template-columns: 1fr 30px;
   align-items: center;
`;

export const MessageText = styled(Paragraph)
.attrs({ ellipsis: true })`
   align-self: center;
   font-size: 1.6rem;
`;

export const UnreadBadge = styled(Badge)`
   align-self: center;
   justify-self: end;
`;

export const MessageCardGroup = styled.div`
   display: grid;
   padding: 1.2rem 1.6rem;
   grid-template-areas: "avatar name time" "avatar message message";
   grid-template-columns: 86px 1fr 1fr;
   border-bottom: 1px solid ${whiteColor};

   ${AvatarGroup} {
      grid-area: avatar;
   }
;

   ${({ active }) => active &&
      css`
         background: ${blackColor};

         ${Name}, ${Time}, ${MessageText} {
            color: ${whitestColor};
         }
      ;

         ${Time} {
            opacity: 0.6;
         }
      ;
         overflow: hidden;
      `
   };
`;
