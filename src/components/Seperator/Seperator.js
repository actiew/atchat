import PropTypes from "prop-types";
import React from "react";
import { SeperatorGroup } from "src/components/Seperator/Seperator.Style";


export const Seperator = ({
   children,
   ...rest
}) => (
   <SeperatorGroup {...rest}>
      {children}
   </SeperatorGroup>
);

Seperator.propTypes = {
   children: PropTypes.any,
};

Seperator.defaultProps = {};
