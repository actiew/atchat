import { FilterList } from "components/FilterList/FilterList";
import { NoteCard } from "components/NoteCard/NoteCard";
import { NoteListGroup, Notes } from "components/NoteList/NoteList.Style";

import noteData from "data/notes";

import useStaggeredList from "hooks/useStaggered";
import PropTypes from "prop-types";
import React from "react";
import { animated } from "react-spring";

export function NoteList({children, ...rest}) {
   const trailAnimes = useStaggeredList(9);
   
   return (
      <NoteListGroup {...rest}>
         <FilterList
            options={["最新笔记", "最近更改"]}
            filterLabel={"列表排序"}
            actionLabel={"添加笔记"}
         >
            <Notes>
               {noteData.map((note, item) => (
                  <animated.div key={item + note.id} style={trailAnimes[item]}>
                     <NoteCard key={note.id} note={note}/>
                  </animated.div>
               ))}
            </Notes>
         </FilterList>
      </NoteListGroup>
   );
}

NoteList.propTypes = {
   children: PropTypes.any,
};

NoteList.defaultProps = {};