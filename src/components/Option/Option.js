import PropTypes from "prop-types";
import React from "react";
import { OptionGroup } from "src/components/Option/Option.Style";


export const Option = ({
   children,
   ...rest
}) => (
   <OptionGroup {...rest}>
      {children}
   </OptionGroup>
);

Option.propTypes = {
   children: PropTypes.any,
};

Option.defaultProps = {};
