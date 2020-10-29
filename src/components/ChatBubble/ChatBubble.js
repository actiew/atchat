import {
   Bubble,
   BubbleTip,
   ChatBubbleGroup,
   MessageText,
   Time,
} from "components/ChatBubble/ChatBubble.Style";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as BubbleTipIcon } from "resources/icon/bubble.svg";

export const ChatBubble = ({children, type, time, ...rest}) => (
   <ChatBubbleGroup type={type} {...rest}>
      <Time>{time}</Time>
      <Bubble>
         <BubbleTip icon={BubbleTipIcon} width={"12px"} height={"18px"} color={"#AAA"}/>
         <MessageText>{children}</MessageText>
      </Bubble>
   </ChatBubbleGroup>
);

ChatBubble.propTypes = {
   children: PropTypes.any,
};

ChatBubble.defaultProps = {};