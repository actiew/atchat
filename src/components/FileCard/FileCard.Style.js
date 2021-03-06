import { Heading } from "src/components/Heading/Heading";
import { Icon } from "src/components/Icon/Icon";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import { Popover } from "src/components/Popover/Popover";
import { whiteColor } from "src/theme/theme";
import styled from "styled-components";


export const FileIcon = styled(Icon)
.attrs({
   width: "60px",
   height: "60px",
})`
   grid-area: icon;
   justify-self: start;
`;

export const FileName = styled(Heading)
.attrs({ level: 3 })`
   margin: 0;
   grid-area: name;
   align-self: start;
`;

export const FileSize = styled(Paragraph)
.attrs({ type: "normal" })`
   grid-area: size;
   align-self: end;
`;

export const Options = styled(Popover)`
   grid-area: options;
   align-self: start;
   justify-self: end;
`;

export const Time = styled(Paragraph)
.attrs({ type: "normal" })`
   grid-area: time;
   align-self: end;
   justify-self: end;
`;

export const FileCardGroup = styled.div`
   display: grid;
   grid-template-areas: "icon name options" "icon size time";
   grid-template-columns: 74px 1fr 1fr;
   padding: 1.2rem 1.6rem;
   border-bottom: 1px solid ${whiteColor};
`;
