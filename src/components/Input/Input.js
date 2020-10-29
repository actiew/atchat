import { InputContainer, InputGroup, Prefix, Suffix } from "components/Input/Input.Style";
import PropTypes from "prop-types";
import React from "react";

export const Input = ({children, placeholder, prefix, suffix, ...rest}) => (
   <InputGroup {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputContainer placeholder={placeholder}/>
      {suffix && <Suffix>{suffix}</Suffix>}
   </InputGroup>
);

Input.propTypes = {
   placeholder: PropTypes.string,
   prefix: PropTypes.any,
   suffix: PropTypes.any,
};

Input.defaultProps = {
   placeholder: "在 atchat 上搜索",
};