import PropTypes from "prop-types";
import React from "react";
import { TextGroup } from "src/components/Text/Text.Style";


export const Text = ({
   children,
   type,
   size,
   bold,
   ...rest
}) => (
   <TextGroup
      type={type}
      size={size}
      bold={bold} {...rest}>
      {children}
   </TextGroup>
);

Text.propTypes = {
   bold: PropTypes.bool,
   children: PropTypes.any,
   size: PropTypes.oneOf([
      "eight",
      "ten",
      "twelve",
      "fourteen",
      "sixteen",
      "eighteen",
      "twenty",
      "twentyTwo",
   ]),
   type: PropTypes.oneOf(["primary", "normal", "danger"]),
};

Text.defaultProps = {};
