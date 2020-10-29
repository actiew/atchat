import React from "react";

import { Radio, Radios } from "./Radio";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Radio",
   component: Radio,
};

export const Default = (args) => <Radio {...args}>选项</Radio>;

export const RadioGroup = () => (
   <Radios label={"选择"}>
      <Radio name={"PermanentFive"}>中国</Radio>
      <Radio name={"PermanentFive"}>美国</Radio>
      <Radio name={"PermanentFive"}>俄罗斯</Radio>
      <Radio name={"PermanentFive"}>英国</Radio>
      <Radio name={"PermanentFive"}>法国</Radio>
   </Radios>
);
