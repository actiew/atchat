import { LabelContainer } from "components/LabelContainer/LabelContainer";
import { Circle, RadioButton, RadioGroup, RedioGroups } from "components/Radio/Radio.Style";
import PropTypes from "prop-types";
import React from "react";

export const Radio = ({children, name, ...rest}) => (
   <RadioGroup {...rest}>
      {children}
      <RadioButton name={name}/>
      <Circle/>
   </RadioGroup>
);

export function Radios({label, children, ...rest}) {
   return (
      <LabelContainer label={label} {...rest}>
         <RedioGroups>
            {children}
         </RedioGroups>
      </LabelContainer>
   );
}

Radio.propTypes = {
   children: PropTypes.any,
   name: PropTypes.string,
};

Radio.defaultProps = {};