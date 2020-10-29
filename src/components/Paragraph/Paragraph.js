import { ParagraphGroup } from "components/Paragraph/Paragraph.Style";
import PropTypes from "prop-types";
import React from "react";

export const Paragraph = ({children, ellipsis, ...rest}) => (
   <ParagraphGroup as="p" ellipsis={ellipsis} {...rest}>
       {children}
   </ParagraphGroup>
);

Paragraph.propTypes = {
   children: PropTypes.any,
   bold: PropTypes.bool,
   ellipsis: PropTypes.bool,
   type: PropTypes.oneOf(["primary", "normal", "danger"]),
   size: PropTypes.oneOf(["eight", "ten", "twelve", "fourteen", "sixteen", "eighteen", "twenty", "twentyTwo"]),
};

Paragraph.defaultProps = {};