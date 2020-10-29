import { LabelContainer } from "components/LabelContainer/LabelContainer";
import { SelectGroup } from "components/Select/Select.Style";
import PropTypes from "prop-types";
import React from "react";

export function Select({label, type, children, ...rest}) {
   const selectWithoutLabel = (
      <SelectGroup type={type} {...rest}>
         {children}
      </SelectGroup>
   );
   return label ? (
      <LabelContainer label={label}>selectWithoutLabel</LabelContainer>) : (selectWithoutLabel);
}

Select.propTypes = {
   children: PropTypes.any,
};

Select.defaultProps = {};