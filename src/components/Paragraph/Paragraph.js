import PropTypes from "prop-types";
import React from "react";
import { ParagraphGroup } from "src/components/Paragraph/Paragraph.Style";


export const Paragraph = ({
   children,
   ellipsis,
   ...rest
}) => (
   <ParagraphGroup
      as="p"
      ellipsis={ellipsis} {...rest}>
      {children}
   </ParagraphGroup>
);

Paragraph.propTypes = {
   children: PropTypes.any,
   ellipsis: PropTypes.bool,
};

Paragraph.defaultProps = {};
