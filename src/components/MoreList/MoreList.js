import React from "react";
import { animated } from "react-spring";
import { FilterList } from "src/components/FilterList/FilterList";
import { NoteListGroup } from "src/components/NoteList/NoteList.Style";

import useStaggeredList from "src/hooks/useStaggered";
import { Heading } from "../Heading/Heading";


export function MoreList ({
   ...rest
}) {
   const trailAnimes = useStaggeredList(9);

   return (
      <NoteListGroup {...rest}>
         <FilterList
            options={["最新应用", "最近使用"]}
            filterLabel="应用排序"
            actionLabel="添加应用"
         />
         <animated.div style={trailAnimes[1]}>
            <Heading
               level={2}
               style={{
                  textAlign: "center",
                  lineHeight: "10vh",
               }}
            >Building...</Heading>
         </animated.div>
      </NoteListGroup>
   );
}

MoreList.propTypes = {};

MoreList.defaultProps = {};
