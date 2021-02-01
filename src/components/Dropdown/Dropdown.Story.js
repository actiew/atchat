import { DropdownItem } from "components/Dropdown/Dropdown.Style";
import { Icon } from "components/Icon/Icon";
import { Paragraph } from "components/Paragraph/Paragraph";
import React from "react";

import { ReactComponent as DotIcon } from "resources/icon/dot.svg";

import { Dropdown } from "./Dropdown";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Dropdown",
   component: Dropdown,
};

const dropdownContent = (
   <>
      <DropdownItem>
         <Paragraph>资料选项卡</Paragraph>
      </DropdownItem>
      <DropdownItem>
         <Paragraph>关闭此会话</Paragraph>
      </DropdownItem>
      <DropdownItem>
         <Paragraph type="danger">屏蔽此好友</Paragraph>
      </DropdownItem>
   </>
);

export const Default = args => (
   <Dropdown content={dropdownContent} {...args}>
      <Icon icon={DotIcon}/>
   </Dropdown>
);
