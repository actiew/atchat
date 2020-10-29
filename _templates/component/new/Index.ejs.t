-- -
    to:
src / components / <%= name %> / <%= name %> . js
    - --

        import React from 'react';
import PropTypes from 'prop-types';
import {
    <%= name %>
    Group
} from "components/<%= name %>/<%= name %>.Style";

export const < %=
name %> = ({ children, ...rest}) => (
   <<%= name %>Group {...rest}>
      {children}
   </<%= name %>Group>
);

<%= name %>.propTypes = {
   children: PropTypes.any,
};

<%= name %>.defaultProps = {}