import PropTypes from "prop-types";
import React from "react";
import {
   FileCardGroup,
   FileIcon,
   FileName,
   FileSize,
   Options,
   Time,
} from "src/components/FileCard/FileCard.Style";

import { Icon } from "src/components/Icon/Icon";
import { ReactComponent as DotIcon } from "src/resources/icon/dot.svg";
import { ReactComponent as ExcelIcon } from "src/resources/icon/excel.svg";
import { ReactComponent as ImageIcon } from "src/resources/icon/image.svg";
import { ReactComponent as PdfIcon } from "src/resources/icon/pdf.svg";
import { ReactComponent as PowerPointIcon } from "src/resources/icon/powerpoint.svg";
import { ReactComponent as WordIcon } from "src/resources/icon/word.svg";

import { ReactComponent as ZipIcon } from "src/resources/icon/zip.svg";


const fileIcon = {
   zip: ZipIcon,
   word: WordIcon,
   excel: ExcelIcon,
   powerpoint: PowerPointIcon,
   pdf: PdfIcon,
   image: ImageIcon,
};

export const FileCard = ({
   file,
   ...rest
}) => (
   <FileCardGroup {...rest}>
      <FileIcon icon={fileIcon[file.type]}/>
      <FileName>{file.name}</FileName>
      <FileSize>{file.size}</FileSize>
      <Options>
         <Icon
            icon={DotIcon}
            opacity={0.8}
            height="18px"
         />
      </Options>
      <Time>{file.updatedAt}</Time>
   </FileCardGroup>
);

FileCard.propTypes = {
   file: PropTypes.any,
};

FileCard.defaultProps = {};
