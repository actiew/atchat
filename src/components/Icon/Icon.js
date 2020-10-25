import React from 'react';
import PropTypes from 'prop-types';
import {IconGroup} from "components/Icon/Icon.Style";

export const Icon = ({icon: IconComponent, size, color, opacity, ...rest}) => (
   <IconGroup size={size} color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent/>}
   </IconGroup>
);

Icon.propTypes = {
   icon: PropTypes.element,
   size: PropTypes.number,
   color: PropTypes.string,
   opacity: PropTypes.number,
};

Icon.defaultProps = {
   size: 36,
}