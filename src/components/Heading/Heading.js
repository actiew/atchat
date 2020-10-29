import { HeadingGroup } from "components/Heading/Heading.Style";
import PropTypes from "prop-types";
import React from "react";

export const Heading = ({children, level, ...rest}) => (
   <HeadingGroup as={`h${level}`} {...rest}>
       {children}
   </HeadingGroup>
);

Heading.propTypes = {
   children: PropTypes.any,
   level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Heading.defaultProps = {};