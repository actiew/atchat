import styled from "styled-components";

import { activeBar } from "utils/mixins";

export const MenuItemGroup = styled.div`
   & > a {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 76px;
      
      ${activeBar(5)};
      ${({active}) => active ? "" : `&::before {height: 0;}`};
      opacity: ${({active}) => active ? 1 : 0.7};
      
      &:hover {
         opacity: 1;
      }
   }
`;

export const MenuItems = styled.div`
   display: grid;
   grid-template-rows: repeat(5, 76px) 1fr;
   
   & > *:last-of-type {
      align-self: end;
   }
`;

export const NavigationGroup = styled.nav`
   box-sizing: border-box;
   display: grid;
   padding: 30px 0 15px;
   grid-template-rows: 88px 1fr;
   width: 99px;
   height: 100%;
   background: ${({theme}) => theme.primaryColor};
   
   & > *:first-of-type {
      justify-self: center;
   }
`;