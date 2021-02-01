import { Popover } from "components/Popover/Popover";
import React from "react";

import { Footer, PopoverContent } from "./Footer";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Footer",
   component: Footer,
};

export const Default = () => (
   <Footer style={{ marginTop: "80px" }}/>
);

export const Po = () => (
   <Popover
      content={<PopoverContent/>}
      style={{ marginTop: "90px" }}
   >点我</Popover>
);
