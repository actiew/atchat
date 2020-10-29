import {
   FileCardGroup,
   FileIcon,
   FileName,
   FileSize,
   Options,
   Time,
} from "components/FileCard/FileCard.Style";

import { Icon } from "components/Icon/Icon";
import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as DotIcon } from "resources/icon/dot.svg";
import { ReactComponent as ExcelIcon } from "resources/icon/excel.svg";
import { ReactComponent as ImageIcon } from "resources/icon/image.svg";
import { ReactComponent as PdfIcon } from "resources/icon/pdf.svg";
import { ReactComponent as PowerPointIcon } from "resources/icon/powerpoint.svg";
import { ReactComponent as WordIcon } from "resources/icon/word.svg";

import { ReactComponent as ZipIcon } from "resources/icon/zip.svg";

const fileIcon = {
   zip: ZipIcon,
   word: WordIcon,
   excel: ExcelIcon,
   powerpoint: PowerPointIcon,
   pdf: PdfIcon,
   image: ImageIcon,
};

export const FileCard = ({children, file, ...rest}) => (
   <FileCardGroup {...rest}>
      <FileIcon icon={fileIcon[file.type]}/>
      <FileName>{file.name}</FileName>
      <FileSize>{file.size}</FileSize>
      <Options>
         <Icon icon={DotIcon} opacity={0.8} height={"18px"}/>
      </Options>
      <Time>{file.updatedAt}</Time>
   </FileCardGroup>
);

FileCard.propTypes = {
   children: PropTypes.any,
};

FileCard.defaultProps = {};