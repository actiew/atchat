import { ButtonGroup } from "components/Button/Button.Style";
import PropTypes from "prop-types";
import React from "react";

export const Button = ({children, type, shape, width, height, fontSize, backgroundColor, ...rest}) => (
   <ButtonGroup
      type={type}
      shape={shape}
      width={width}
      height={height}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      {...rest}
   >
       {children}
   </ButtonGroup>
);

Button.propTypes = {
   children: PropTypes.any,
   type: PropTypes.oneOf(["primary"]),
   shape: PropTypes.oneOf(["circle", "rect"]),
   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
   type: "primary",
   width: "30px",
   height: "30px",
};