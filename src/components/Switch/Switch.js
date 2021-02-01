import React from "react";
import { Checkbox, Slider, SwitchGroup } from "src/components/Switch/Switch.Style";


export const Switch = ({
   ...rest
}) => (
   <SwitchGroup {...rest}>
      <Checkbox/>
      <Slider/>
   </SwitchGroup>
);

Switch.propTypes = {};

Switch.defaultProps = {};
