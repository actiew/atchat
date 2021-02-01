import PropTypes from "prop-types";
import React, { useState } from "react";
import { DropdownContainer, DropdownGroup } from "src/components/Dropdown/Dropdown.Style";


export function Dropdown ({
   children,
   content,
   align,
   ...rest
}) {
   const [visible, setVisible] = useState(false);

   return (
      <DropdownGroup onClick={() => setVisible(!visible)} {...rest}>
         {children}
         {content && (
            <DropdownContainer
               align={align}
               visible={visible}
            >{content}</DropdownContainer>
         )}
      </DropdownGroup>
   );
}

Dropdown.propTypes = {
   align: PropTypes.oneOf(["top", "left", "right", "bottom"]),
   children: PropTypes.any,
   content: PropTypes.any,
};

Dropdown.defaultProps = {
   align: "right",
};
