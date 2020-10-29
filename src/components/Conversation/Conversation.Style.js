import { ChatBubble } from "components/ChatBubble/ChatBubble";

import { animated } from "react-spring";
import styled from "styled-components";

export const Conversations = styled(animated.div)`
   display: flex;
   flex: 1;
   flex-direction: column;
   padding: 10px 15px;
   width: 100%;
   overflow-y: auto;
   box-sizing: border-box;

   &::-webkit-scrollbar {
      display: none;
   }
   
   & > * {
      margin: 6px 0;
   }
   
`;

export const MineChatBubble = styled(ChatBubble).attrs({type: "mine"})`
   margin-left: 30%;
`;

export const OtherChatBubble = styled(ChatBubble)`
   margin-right: 30%;
`;

export const ConversationGroup = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   // border-left: 1px solid ${({theme}) => theme.lineColor};
   // border-right: 1px solid ${({theme}) => theme.lineColor};

   & > *:last-of-type {
      align-self: end;
   }
`;