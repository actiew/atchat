import { mainColor, whiteColor } from "src/theme/theme";
import styled, { css } from "styled-components";


export const Nav = styled.nav`
   flex-shrink: 0;
   z-index: 99;
`;

export const Sidebar = styled.aside`
   position: relative;
   flex: 1;
   min-width: 344px;
   max-width: 448px;
   height: 100%;
   z-index: 50;

   & > div {
      position: absolute;
      will-change: transform, opacity;
      width: 100%;
      height: 100%;
   }
`;

export const Content = styled.main`
   position: relative;
   flex: 2;
   border-left: 1px solid ${whiteColor};
   border-right: 1px solid ${whiteColor};
`;

export const Drawer = styled.div`
   width: 0;
   max-width: 300px;
   transform: translateX(200px);
   transition: 0.3s transform;
   will-change: width, transform;
   ${({ show }) => show
      && css`
         width: initial;
         transform: translateX(0);
      `
   };
`;

export const ChatAppGroup = styled.div`
   box-sizing: border-box;
   display: flex;
   position: relative;
   width: 90vw;
   height: 90vh;
   border: 1px solid ${mainColor};
   overflow: hidden;
`;
