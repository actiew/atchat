import { Icon } from "components/Icon/Icon";
import React from "react";
import { ReactComponent as AddIcon } from "resources/icon/add.svg";
import { ReactComponent as LinkIcon } from "resources/icon/link.svg";

import { ReactComponent as SearchIcon } from "resources/icon/search.svg";
import { ReactComponent as VoiceIcon } from "resources/icon/voice.svg";

import theme from "theme";
import { Input } from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Input",
   component: Input,
};

export const Default = (args) => <Input {...args}/>;

export const Search = (args) => (
   <Input
      prefix={<Icon icon={SearchIcon} width={"24px"} height={"24px"} color={theme.grayColor}/>}
      {...args}
   />
);

export const WithFix = (args) => (<Input
   prefix={<Icon icon={VoiceIcon} width={"24px"} height={"24px"} color={theme.grayColor}/>}
   suffix={
      <>
         <Icon icon={LinkIcon} width={"24px"} height={"24px"} color={theme.grayColor}/>
         <Icon icon={AddIcon} width={"24px"} height={"24px"} color={theme.grayColor}/>
      </>}
   {...args}
/>);