import PropTypes from "prop-types";
import React, { useState } from "react";
import { Content, PopoverGroup, Traget, Triangle } from "src/components/Popover/Popover.Style";


export function Popover ({
   children,
   content,
   offset = {},
   onVisible,
   onHide,
   ...rest
}) {
   const [visible, setVisible] = useState(false);
   const handleClick = () => {
      if (visible) {
         setVisible(false);
         onHide && onHide();
      } else {
         setVisible(true);
         onVisible && onVisible();
      }
   };

   return (
      <PopoverGroup onClick={handleClick} {...rest}>
         <Content
            visible={visible}
            offset={offset}
         >{content}</Content>
         <Triangle
            visible={visible}
            offset={offset}
         />
         <Traget>{children}</Traget>
      </PopoverGroup>
   );
}

Popover.propTypes = {
   children: PropTypes.any,
   content: PropTypes.any,
   offset: PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.string,
   }),
   onVisible: PropTypes.func,
   onHide: PropTypes.func,
};

Popover.defaultProps = {};
