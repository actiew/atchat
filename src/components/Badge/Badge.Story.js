import React from "react";
import {Badge} from "./Badge";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Badge",
   component: Badge,
};

const Template = (args) => <Badge {...args}/>;

export const Default = Template.bind({});
Default.args = {
   count: 3,
};
