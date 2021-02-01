import PropTypes from "prop-types";
import React from "react";
import { LabelContainer } from "src/components/LabelContainer/LabelContainer";
import { Circle, RadioButton, RadioGroup, RedioGroups } from "src/components/Radio/Radio.Style";


export const Radio = ({
   children,
   name,
   ...rest
}) => (
   <RadioGroup {...rest}>
      {children}
      <RadioButton name={name}/>
      <Circle/>
   </RadioGroup>
);

export function Radios ({
   label,
   children,
   ...rest
}) {
   return (
      <LabelContainer label={label} {...rest}>
         <RedioGroups>
            {children}
         </RedioGroups>
      </LabelContainer>
   );
}

Radios.propTypes = {
   children: PropTypes.any,
   label: PropTypes.any,
};

Radio.defaultProps = {};
