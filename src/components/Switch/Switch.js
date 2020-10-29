import { Checkbox, Slider, SwitchGroup } from "components/Switch/Switch.Style";
import PropTypes from "prop-types";
import React from "react";

export const Switch = ({children, ...rest}) => (
   <SwitchGroup {...rest}>
      <Checkbox/>
      <Slider/>
   </SwitchGroup>
);

Switch.propTypes = {
   children: PropTypes.any,
};

Switch.defaultProps = {};