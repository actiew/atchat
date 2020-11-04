import { FilterList } from "components/FilterList/FilterList";
import { NoteListGroup } from "components/NoteList/NoteList.Style";

import useStaggeredList from "hooks/useStaggered";
import PropTypes from "prop-types";
import React from "react";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

export function MoreList ({children, ...rest}) {
   const trailAnimes = useStaggeredList(9);
   
   return (
      <NoteListGroup {...rest}>
         <FilterList
            options={["最新应用", "最近使用"]}
            filterLabel={"应用排序"}
            actionLabel={"添加应用"}
         >
            <animated.div style={trailAnimes[1]}>
               <Heading level={2} style={{textAlign: "center", lineHeight: "10vh"}}
               >Building...</Heading>
            </animated.div>
         </FilterList>
      </NoteListGroup>
   );
}

MoreList.propTypes = {
   children: PropTypes.any,
};

MoreList.defaultProps = {};