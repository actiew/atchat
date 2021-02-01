import PropTypes from "prop-types";
import React from "react";
import { LabelContainerGroup } from "src/components/LabelContainer/LabelContainer.Style";

import { Text } from "src/components/Text/Text";


export const LabelContainer = ({
   children,
   label,
   ...rest
}) => (
   <LabelContainerGroup {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}</Text>}
      {children}
   </LabelContainerGroup>
);

LabelContainer.propTypes = {
   children: PropTypes.any,
   label: PropTypes.any,
};

LabelContainer.defaultProps = {};
