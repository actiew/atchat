import { FileCard } from "components/FileCard/FileCard";
import { FileListGroup, Files } from "components/FileList/FileList.Style";
import { FilterList } from "components/FilterList/FilterList";

import fileData from "data/files";

import useStaggeredList from "hooks/useStaggered";
import PropTypes from "prop-types";
import React from "react";
import { animated } from "react-spring";

export function FileList({children, ...rest}) {
   const trailAnimes = useStaggeredList(9);
   
   return (
      <FileListGroup {...rest}>
         <FilterList
            options={["最新文件", "文件名称"]}
            filterLabel={"列表排序"}
            actionLabel={"添加文件"}
         >
            <Files>
               {fileData.map((file, item) => (
                  <animated.div key={item + file.id} style={trailAnimes[item]}>
                     <FileCard key={file.id} file={file}/>
                  </animated.div>
               ))}
            </Files>
         </FilterList>
      </FileListGroup>
   );
}

FileList.propTypes = {
   children: PropTypes.any,
};

FileList.defaultProps = {};