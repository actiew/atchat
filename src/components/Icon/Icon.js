import PropTypes from "prop-types";
import React from "react";
import { IconGroup } from "src/components/Icon/Icon.Style";

import { SocialIcon } from "src/components/Icon/SocialIcon/SocialIcon";


export const Icon = ({
   icon: IconComponent,
   width,
   height,
   color,
   opacity,
   ...rest
}) => (
   <IconGroup
      width={width}
      height={height}
      color={color}
      opacity={opacity} {...rest}>
      {IconComponent && <IconComponent/>}
   </IconGroup>
);

Icon.Social = SocialIcon;

Icon.propTypes = {
   color: PropTypes.string,
   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   icon: PropTypes.element,
   opacity: PropTypes.number,
   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
   height: "36px",
   width: "36px",
};
