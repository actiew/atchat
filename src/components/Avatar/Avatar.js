import { AvatarGroup, AvatarImage } from "components/Avatar/Avatar.Style";
import PropTypes from "prop-types";
import React from "react";

import CommunityAvatar from "resources/images/communityAvatar.jpg";

export const Avatar = ({children, src, size, status, ...rest}) => (
   <AvatarGroup size={size} status={status}{...rest}>
      <AvatarImage src={src}/>
      {children}
   </AvatarGroup>
);

Avatar.propTypes = {
   src: PropTypes.string.isRequired,
   size: PropTypes.number,
   status: PropTypes.string,
};

Avatar.defaultProps = {
   src: CommunityAvatar,
   size: 48,
};