import PropTypes from "prop-types";
import React from "react";
import { EmojiGroup } from "src/components/Emoji/Emoji.Style";


export const Emoji = ({
   children,
   label,
   ...rest
}) => (
   <EmojiGroup
      role="img"
      aria-label={label} {...rest}>
      {children}
   </EmojiGroup>
);

Emoji.propTypes = {
   children: PropTypes.any,
   label: PropTypes.string,
};

Emoji.defaultProps = {};
