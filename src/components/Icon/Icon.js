import { IconGroup } from "components/Icon/Icon.Style";

import { SocialIcon } from "components/Icon/SocialIcon/SocialIcon";
import PropTypes from "prop-types";
import React from "react";

export const Icon = ({icon: IconComponent, width, height, color, opacity, ...rest}) => (
   <IconGroup width={width} height={height} color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent/>}
   </IconGroup>
);

Icon.Social = SocialIcon;

Icon.propTypes = {
   icon: PropTypes.element,
   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   color: PropTypes.string,
   opacity: PropTypes.number,
};

Icon.defaultProps = {
   width: "36px",
   height: "36px",
};