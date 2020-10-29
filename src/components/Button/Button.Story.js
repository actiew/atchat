import { Icon } from "components/Icon/Icon";
import React from "react";
import { ReactComponent as Plus } from "resources/icon/plus.svg";

import theme from "theme";
import { Button } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Button",
   component: Button,
};

export const Rect = () => <Button shape={"rect"}>按钮</Button>;

export const Circle = () => (
   <Button>
      <Icon icon={Plus} color={theme.whiteColor} width={"12px"} height={"12px"}/>
   </Button>
);