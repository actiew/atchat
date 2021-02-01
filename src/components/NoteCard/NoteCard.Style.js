import { Heading } from "src/components/Heading/Heading";
import { Paragraph } from "src/components/Paragraph/Paragraph";
import { fourteen, twelve, whiteColor } from "src/theme/theme";
import styled from "styled-components";


export const NoteImage = styled.img`
   grid-area: image;
   width: 60px;
   height: 60px;
   object-fit: cover;
   border-radius: 3px;
`;

export const NoteTitle = styled(Heading)
.attrs({ level: 3 })`
   margin: 0;
   grid-area: title;
   align-self: start;
`;

export const NoteExcerpt = styled(Paragraph)
.attrs({ size: twelve })`
   grid-area: excerpt;
   align-self: end;
   font-size: ${fourteen};
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
`;

export const NotePublishTime = styled(Paragraph)
.attrs({ type: "normal" })`
   grid-area: time;
   justify-self: end;
`;

export const NoteCardGroup = styled.div`
   display: grid;
   grid-template-areas: "image title time" "image excerpt excerpt";
   grid-template-columns: 72px 1fr 125px;
   padding: 1.2rem 1.6rem;
   border-bottom: 1px solid ${whiteColor};
`;
