import styled from "styled-components";


export const Contacts = styled.div`
   height: calc(100% - 14.6rem);
   overflow-y: scroll;

   & > * {
      margin: 8px 0;
   }

   & > *:last-of-type > * {
      border-bottom: none;
   }
`;

export const ContactListGroup = styled.div`
   height: 100%;
`;
