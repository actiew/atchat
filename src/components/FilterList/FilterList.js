import PropTypes from "prop-types";
import React from "react";
import { Button } from "src/components/Button/Button";

import { ActionOptions, Filter, FilterOptions } from "src/components/Filter/Filter";
import { FilterListGroup } from "src/components/FilterList/FilterList.Style";
import { Icon } from "src/components/Icon/Icon";
import { Search } from "src/components/Input/Input.Story";
import { Option } from "src/components/Option/Option";
import { Select } from "src/components/Select/Select";

import { ReactComponent as Plus } from "src/resources/icon/plus.svg";


export function FilterList ({
   children,
   options,
   filterLabel,
   actionLabel,
   ...rest
}) {

   return (
      <FilterListGroup {...rest}>
         <Search/>
         <Filter style={{ padding: "9px 0" }}>
            {options &&
            <FilterOptions label={filterLabel}>
               <Select>
                  {options.map((option, index) =>
                     <Option key={index}>{option}</Option>)}
               </Select>
            </FilterOptions>
            }
            {actionLabel &&
            <ActionOptions label={actionLabel}>
               <Button shape="circle">
                  <Icon
                     icon={Plus}
                     width="10px"
                     height="10px"
                     color="#FFFFFF"
                  />
               </Button>
            </ActionOptions>
            }
         </Filter>
      </FilterListGroup>
   );
}

FilterList.propTypes = {
   actionLabel: PropTypes.string,
   children: PropTypes.any,
   filterLabel: PropTypes.string,
   options: PropTypes.array,
};

FilterList.defaultProps = {};
