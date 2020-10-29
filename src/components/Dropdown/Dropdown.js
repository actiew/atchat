import { DropdownContainer, DropdownGroup } from "components/Dropdown/Dropdown.Style";
import PropTypes from "prop-types";
import React, { useState } from "react";

export function Dropdown({children, content, align, ...rest}) {
   const [visible, setVisible] = useState(false);
   
   return (
      <DropdownGroup onClick={() => setVisible(!visible)} {...rest}>
         {children}
         {content && (
            <DropdownContainer align={align} visible={visible}>{content}</DropdownContainer>
         )}
      </DropdownGroup>
   );
}

Dropdown.propTypes = {
   children: PropTypes.any,
   content: PropTypes.any,
   align: PropTypes.oneOf(["top", "left", "right", "bottom"]),
};

Dropdown.defaultProps = {
   align: "right",
};