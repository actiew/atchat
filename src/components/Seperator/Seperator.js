import { SeperatorGroup } from "components/Seperator/Seperator.Style";
import PropTypes from "prop-types";
import React from "react";

export const Seperator = ({children, ...rest}) => (
   <SeperatorGroup {...rest}>
      {children}
   </SeperatorGroup>
);

Seperator.propTypes = {
   children: PropTypes.any,
};

Seperator.defaultProps = {};