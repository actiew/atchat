import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "src/components/Avatar/Avatar";
import {
   Message,
   MessageCardGroup,
   MessageText,
   Name,
   Time,
   UnreadBadge,
} from "src/components/MessageCard/MessageCard.Style";


export const MessageCard = ({
   children,
   avatarSrc,
   avatarStatus,
   name,
   time,
   message,
   unreadCount,
   active,
   ...rest
}) => (
   <MessageCardGroup active={active} {...rest}>
      <Avatar
         size={72}
         status={avatarStatus}
         src={avatarSrc}
      />
      <Name>{name}</Name>
      <Time>{time}</Time>
      <Message>
         <MessageText>{message}</MessageText>
         <UnreadBadge count={unreadCount}/>
      </Message>
   </MessageCardGroup>);

MessageCard.propTypes = {
   active: PropTypes.bool,
   avatarSrc: PropTypes.string.isRequired,
   avatarStatus: PropTypes.any,
   children: PropTypes.any,
   message: PropTypes.any,
   name: PropTypes.any,
   replied: PropTypes.bool,
   time: PropTypes.any,
   unreadCount: PropTypes.number
}

MessageCard.defaultProps = {};
