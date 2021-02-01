import styled from "styled-components";


export const Notes = styled.div`
   height: calc(100% - 14.6rem);
   overflow-y: scroll;

   & > * {
      margin: 8px 0;
   }

   & > *:last-of-type > * {
      border-bottom: none;
   }
`;

export const NoteListGroup = styled.div`
   padding: 0 12px;
   height: 100%;
`;
