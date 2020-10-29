import { Button } from "components/Button/Button";
import React from "react";
import { Popover } from "./Popover";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Popover",
   component: Popover,
};

export const Default = (args) => (
   <div
      style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         height: "50vh",
      }}
   >
      <Popover content={"你好，实视!"} {...args}>
         <Button shape="rect">点我</Button>
      </Popover>
   </div>
);