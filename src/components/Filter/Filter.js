import PropTypes from "prop-types";
import React from "react";
import { Action, FilterGroup, Filters } from "src/components/Filter/Filter.Style";
import { Text } from "src/components/Text/Text";
import { fourteen } from "src/theme/theme";


export const Filter = ({
   children,
   ...rest
}) => (
   <FilterGroup {...rest}>
      {children}
   </FilterGroup>);

export const FilterOptions = ({
   children,
   label,
   ...rest
}) => (
   <Filters{...rest}>
      <Text
         type="normal"
         size={fourteen}
      >{label}:</Text>
      {children}
   </Filters>);

export const ActionOptions = ({
   children,
   label,
   ...rest
}) => (
   <Action {...rest}>
      <Text
         type="normal"
         size={fourteen}
      >{label}:</Text>
      {children}
   </Action>);

Filter.propTypes = {
   children: PropTypes.any,
};

Filter.defaultProps = {};
