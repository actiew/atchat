import { Button } from "components/Button/Button";

import { ActionOptions, Filter, FilterOptions } from "components/Filter/Filter";
import { FilterListGroup } from "components/FilterList/FilterList.Style";
import { Icon } from "components/Icon/Icon";
import { Search } from "components/Input/Input.Story";
import { Option } from "components/Option/Option";
import { Select } from "components/Select/Select";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as Plus } from "resources/icon/plus.svg";

export function FilterList ({children, options, filterLabel, actionLabel, ...rest}) {
   
   return (
      <FilterListGroup {...rest}>
         <Search/>
         <Filter style={{padding: "9px 0"}}>
            {options &&
            <FilterOptions label={filterLabel}>
               <Select>
                  {options.map((option, index) => <Option key={index}>{option}</Option>)}
               </Select>
            </FilterOptions>
            }
            {actionLabel &&
            <ActionOptions label={actionLabel}>
               <Button shape={"circle"}>
                  <Icon icon={Plus} width={"10px"} height={"10px"} color="#FFF"/>
               </Button>
            </ActionOptions>
            }
         </Filter>
         {children}
      </FilterListGroup>
   );
}

FilterList.propTypes = {
   children: PropTypes.any,
   options: PropTypes.array,
   filterLabel: PropTypes.string,
   actionLabel: PropTypes.string,
};

FilterList.defaultProps = {};