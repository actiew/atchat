import { OptionGroup } from "components/Option/Option.Style";
import PropTypes from "prop-types";
import React from "react";

export const Option = ({children, ...rest}) => (
   <OptionGroup {...rest}>
       {children}
   </OptionGroup>
);

Option.propTypes = {
   children: PropTypes.any,
};

Option.defaultProps = {};