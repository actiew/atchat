import PropTypes from "prop-types";
import React from "react";
import { Button } from "src/components/Button/Button";
import { Icon } from "src/components/Icon/Icon";

import { whitestColor } from "src/theme/theme";


export const SocialIcon = ({
   icon,
   backgroundColor,
   href,
   alt,
}) => (
   <>
      <Button
         shape="circle"
         width="45px"
         height="45px"
         backgroundColor={backgroundColor}
         onClick={() => href && window.open(href, "_back")}
         alt={alt}
      >
         <Icon
            icon={icon}
            color={whitestColor}
            width="29px"
         />
      </Button>
   </>
);

SocialIcon.propTypes = {
   alt: PropTypes.any,
   backgroundColor: PropTypes.string,
   href: PropTypes.string,
   icon: PropTypes.any,
};

SocialIcon.defaultProps = {};
