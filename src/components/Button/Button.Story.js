import React from "react";
import { Icon } from "src/components/Icon/Icon";
import { ReactComponent as Plus } from "src/resources/icon/plus.svg";
import { whitestColor } from "src/theme/theme";
import { Button } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Button",
   component: Button,
};

export const Rect = () => <Button shape="rect">按钮</Button>;

export const Circle = () => (
   <Button>
      <Icon
         icon={Plus}
         color={whitestColor}
         width="12px"
         height="12px"
      />
   </Button>
);
