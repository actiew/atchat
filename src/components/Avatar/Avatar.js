import PropTypes from "prop-types";
import React from "react";
import { AvatarGroup, AvatarImage } from "src/components/Avatar/Avatar.Style";

import CommunityAvatar from "src/resources/images/communityAvatar.jpg";


export const Avatar = ({
   children,
   src,
   size,
   status,
   ...rest
}) => (
   <AvatarGroup
      size={size}
      status={status}{...rest}>
      <AvatarImage src={src}/>
      {children}
   </AvatarGroup>
);

Avatar.propTypes = {
   children: PropTypes.any,
   size: PropTypes.number,
   src: PropTypes.string.isRequired,
   status: PropTypes.string,
};

Avatar.defaultProps = {
   size: 48,
   src: CommunityAvatar,
};
