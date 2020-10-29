import { LabelContainerGroup } from "components/LabelContainer/LabelContainer.Style";

import { Text } from "components/Text/Text";
import PropTypes from "prop-types";
import React from "react";

export const LabelContainer = ({children, label, ...rest}) => (
   <LabelContainerGroup {...rest}>
      {label && <Text style={{marginBottom: "8px"}}>{label}</Text>}
      {children}
   </LabelContainerGroup>
);

LabelContainer.propTypes = {
   children: PropTypes.any,
};

LabelContainer.defaultProps = {};