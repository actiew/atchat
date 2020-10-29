import styled from "styled-components";

export const Contacts = styled.div`
   margin: -8px 0 0;
   & > * {
      margin: 8px 0;
   }
   & > *:last-of-type {
      border: none;
   }
`;

export const ContactListGroup = styled.div`
   padding: 0 12px;
   height: 100%;
`;