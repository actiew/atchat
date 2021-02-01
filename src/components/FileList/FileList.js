import React from "react";
import { animated } from "react-spring";
import { FileCard } from "src/components/FileCard/FileCard";
import { FileListGroup, Files } from "src/components/FileList/FileList.Style";
import { FilterList } from "src/components/FilterList/FilterList";

import useStaggeredList from "src/hooks/useStaggered";
import { useData } from "src/utils/mixins";


export function FileList ({
   ...rest
}) {
   const trailAnimes = useStaggeredList(9);

   const files = useData("files");

   return (
      <FileListGroup {...rest}>
         <FilterList
            options={["最新文件", "文件名称"]}
            filterLabel="列表排序"
            actionLabel="添加文件"
         />
         <Files>
            {files.map((file, item) => (
               <animated.div
                  key={item + file.id}
                  style={trailAnimes[item]}
               >
                  <FileCard
                     key={file.id}
                     file={file}
                  />
               </animated.div>
            ))}
         </Files>
      </FileListGroup>
   );
}

FileList.propTypes = {};

FileList.defaultProps = {};
