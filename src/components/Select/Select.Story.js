import { Option } from "components/Option/Option";
import React from "react";
import { Select } from "./Select";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Select",
   component: Select,
};

export const Default = () => (
   <Select>
      <Option>最新消息优先</Option>
      <Option>在线好友优先</Option>
   </Select>
);

export const FormSelect = () => (
   <Select type={"form"}>
      <Option>北京市</Option>
      <Option>上海市</Option>
      <Option>天津市</Option>
      <Option>重庆市</Option>
   </Select>
);