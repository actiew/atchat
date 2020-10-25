import React from 'react';
import PropTypes from 'prop-types';
import {AvatarGroup, AvatarImage} from "components/Avatar/Avatar.Style";

export const Avatar = ({src, size, status, ...rest}) => (
   <AvatarGroup size={size} status={status}{...rest}>
      <AvatarImage src={src}/>
   </AvatarGroup>
);

Avatar.propTypes = {
   src: PropTypes.string.isRequired,
   size: PropTypes.number,
   status: PropTypes.string,
};

Avatar.defaultProps = {
   src: "https://actiew.com/favicon.ico",
   size: 48,
}