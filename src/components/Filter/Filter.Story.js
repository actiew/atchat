import React from "react";
import { Button } from "src/components/Button/Button";
import { Icon } from "src/components/Icon/Icon";
import { Option } from "src/components/Option/Option";
import { Select } from "src/components/Select/Select";

import { ReactComponent as Plus } from "src/resources/icon/plus.svg";
import { whitestColor } from "src/theme/theme";
import { ActionOptions, Filter, FilterOptions } from "./Filter";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "组件/Filter",
   component: Filter,
};

export const FilterDefault = args => (
   <Filter {...args}>
      <FilterOptions label="列表排序">
         <Select>
            <Option>最新消息</Option>
            <Option>在线好友</Option>
         </Select>
      </FilterOptions>
      <ActionOptions label="创建会话">
         <Button shape="circle">
            <Icon
               icon={Plus}
               width="12px"
               height="12px"
               color={whitestColor}
            />
         </Button>
      </ActionOptions>
   </Filter>
);
