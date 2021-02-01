import React from "react";
import { Icon } from "src/components/Icon/Icon";
import { ReactComponent as AddIcon } from "src/resources/icon/add.svg";
import { ReactComponent as LinkIcon } from "src/resources/icon/link.svg";

import { ReactComponent as SearchIcon } from "src/resources/icon/search.svg";
import { ReactComponent as VoiceIcon } from "src/resources/icon/voice.svg";

import { blackColor } from "src/theme/theme";
import { Input } from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Input",
   component: Input,
};

export const Default = args => <Input {...args}/>;

export const Search = args => (
   <Input
      type="search"
      prefix={<Icon
         icon={SearchIcon}
         width="24px"
         height="24px"
         color={blackColor}
      />}
      {...args}
   />
);

export const WithFix = (args) => (<Input
   prefix={<Icon
      icon={VoiceIcon}
      width="24px"
      height="24px"
      color={blackColor}
   />}
   suffix={
      <>
         <Icon
            icon={LinkIcon}
            width="24px"
            height="24px"
            color={blackColor}
         />
         <Icon
            icon={AddIcon}
            width="24px"
            height="24px"
            color={blackColor}
         />
      </>}
   {...args}
/>);
