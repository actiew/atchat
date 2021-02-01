import PropTypes from "prop-types";
import React from "react";
import { InputContainer, InputGroup, Prefix, Suffix } from "src/components/Input/Input.Style";


export const Input = ({
   type,
   placeholder,
   prefix,
   suffix,
   ...rest
}) => (
   <InputGroup {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputContainer
         type={type}
         placeholder={placeholder}
      />
      {suffix && <Suffix>{suffix}</Suffix>}
   </InputGroup>
);

Input.propTypes = {
   placeholder: PropTypes.string,
   prefix: PropTypes.any,
   suffix: PropTypes.any,
   type: PropTypes.any,
};

Input.defaultProps = {
   placeholder: "在 atchat 上搜索",
};
