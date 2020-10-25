import React from 'react';
import PropTypes from 'prop-types';
import {BadgeGroup, Count} from "components/Badge/Badge.Style";

export const Badge = ({children, count, isShow, showZero, ...rest}) => (
   <BadgeGroup variant={children ? "dot" : "default"} count={count} isShow={isShow} showZero={showZero} {...rest}>
      {children || <Count>{count}</Count>}
   </BadgeGroup>
);

Badge.propTypes = {
   children: PropTypes.any,
   count: PropTypes.number,
   isShow: PropTypes.bool,
   showZero: PropTypes.bool,
};

Badge.defaultProps = {}