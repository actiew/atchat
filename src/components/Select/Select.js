import PropTypes from "prop-types";
import React from "react";
import { LabelContainer } from "src/components/LabelContainer/LabelContainer";
import { SelectGroup } from "src/components/Select/Select.Style";


export function Select ({
   label,
   type,
   children,
   ...rest
}) {
   const selectWithoutLabel = (
      <SelectGroup type={type} {...rest}>
         {children}
      </SelectGroup>
   );
   return label
      ? (
         <LabelContainer label={label}>selectWithoutLabel</LabelContainer>)
      : (selectWithoutLabel);
}

Select.propTypes = {
   children: PropTypes.any,
   label: PropTypes.any,
   type: PropTypes.any,
};

Select.defaultProps = {};
