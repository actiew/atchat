import { Avatar } from "components/Avatar/Avatar";
import {
   Message,
   MessageCardGroup,
   MessageText,
   Name,
   Time,
   UnreadBadge,
} from "components/MessageCard/MessageCard.Style";
import PropTypes from "prop-types";
import React from "react";

export const MessageCard = ({children, avatarSrc, avatarStatus, name, time, message, unreadCount, active, ...rest}) => (
   <MessageCardGroup active={active} {...rest}>
      <Avatar size={72} status={avatarStatus} src={avatarSrc}/>
      <Name>{name}</Name>
      <Time>{time}</Time>
      <Message>
         <MessageText>{message}</MessageText>
         <UnreadBadge count={unreadCount}/>
      </Message>
   </MessageCardGroup>);

MessageCard.propTypes = {
   children: PropTypes.any,
   avatarSrc: PropTypes.string.isRequired,
   avatarStatus: PropTypes.any,
   name: PropTypes.any,
   time: PropTypes.any,
   message: PropTypes.any,
   unreadCount: PropTypes.number,
   active: PropTypes.bool,
   replied: PropTypes.bool,
};

MessageCard.defaultProps = {};