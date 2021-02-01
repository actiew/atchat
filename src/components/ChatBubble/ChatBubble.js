import PropTypes from "prop-types";
import React from "react";
import {
   Bubble,
   BubbleTip,
   ChatBubbleGroup,
   MessageText,
   Time,
} from "src/components/ChatBubble/ChatBubble.Style";

import { ReactComponent as BubbleTipIcon } from "src/resources/icon/bubble.svg";


export const ChatBubble = ({
   children,
   type,
   time,
   ...rest
}) => (
   <ChatBubbleGroup type={type} {...rest}>
      <Time>{time}</Time>
      <Bubble>
         <BubbleTip
            icon={BubbleTipIcon}
            width="12px"
            height="18px"
            color="#AAAAAA"
         />
         <MessageText>{children}</MessageText>
      </Bubble>
   </ChatBubbleGroup>
);

ChatBubble.propTypes = {
   children: PropTypes.any,
   time: PropTypes.any,
   type: PropTypes.oneOf(["mine"]),
};

ChatBubble.defaultProps = {};
