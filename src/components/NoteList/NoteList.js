import React from "react";
import { animated } from "react-spring";
import { FilterList } from "src/components/FilterList/FilterList";
import { NoteCard } from "src/components/NoteCard/NoteCard";
import { NoteListGroup, Notes } from "src/components/NoteList/NoteList.Style";

import useStaggeredList from "src/hooks/useStaggered";
import { useData } from "src/utils/mixins";


export function NoteList ({
   ...rest
}) {
   const trailAnimes = useStaggeredList(9);

   const notes = useData("notes");

   return (
      <NoteListGroup {...rest}>
         <FilterList
            options={["最新笔记", "最近更改"]}
            filterLabel="列表排序"
            actionLabel="添加笔记"
         />
         <Notes>
            {notes.map((note, item) => (
               <animated.div
                  key={item + note.id}
                  style={trailAnimes[item]}
               >
                  <NoteCard
                     key={note.id}
                     note={note}
                  />
               </animated.div>
            ))}
         </Notes>
      </NoteListGroup>
   );
}

NoteList.propTypes = {};

NoteList.defaultProps = {};
