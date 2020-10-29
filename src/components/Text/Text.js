import { TextGroup } from "components/Text/Text.Style";
import PropTypes from "prop-types";
import React from "react";

export const Text = ({children, type, size, bold, ...rest}) => (
   <TextGroup type={type} size={size} bold={bold} {...rest}>
       {children}
   </TextGroup>
);

Text.propTypes = {
   children: PropTypes.any,
   type: PropTypes.oneOf(["primary", "normal", "danger"]),
   size: PropTypes.oneOf(["eight", "ten", "twelve", "fourteen", "sixteen", "eighteen", "twenty", "twentyTwo"]),
   bold: PropTypes.bool,
};

Text.defaultProps = {};