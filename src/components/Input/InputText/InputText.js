import { InputTextGroup, InputUnderline } from "components/Input/InputText/InputText.Style";

import { LabelContainer } from "components/LabelContainer/LabelContainer";
import PropTypes from "prop-types";
import React from "react";

export function InputText({label, placeholder, ...rest}) {
   const input = <InputUnderline type="text" placeholder={placeholder}/>;
   
   return (
      <InputTextGroup {...rest}>
         {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
      </InputTextGroup>
   );
}

InputText.propTypes = {
   label: PropTypes.string,
   placeholder: PropTypes.string,
};

InputText.defaultProps = {
   placeholder: "信息",
};