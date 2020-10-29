import { Button } from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import PropTypes from "prop-types";
import React from "react";

import theme from "theme";

export const SocialIcon = ({icon, backgroundColor, href, alt}) => (
   <>
      <Button
         shape={"circle"}
         width={"45px"}
         height={"45px"}
         backgroundColor={backgroundColor}
         onClick={() => href && window.open(href, "_back")}
         alt={alt}
      >
         <Icon icon={icon} color={theme.whiteColor} width={"29px"}/>
      </Button>
   </>
);

SocialIcon.propTypes = {
   icon: PropTypes.elementType,
   backgroundColor: PropTypes.string,
   href: PropTypes.string,
};

SocialIcon.defaultProps = {};