import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "src/components/Button/Button.Style";


export const Button = ({
   children,
   type,
   shape,
   width,
   height,
   fontSize,
   backgroundColor,
   ...rest
}) => (
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
   backgroundColor: PropTypes.any,
   children: PropTypes.any,
   fontSize: PropTypes.any,
   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   shape: PropTypes.oneOf(["circle", "rect"]),
   type: PropTypes.oneOf(["primary"]),
   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
   height: "30px",
   type: "primary",
   width: "30px",
};
