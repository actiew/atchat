import { blackerColor, whitestColor } from "src/theme/theme";
import styled from "styled-components";


export const Content = styled.div`
   position: absolute;
   bottom: calc(100% + 18px);
   padding: 9px 15px;
   border-radius: 6px;
   background: ${whitestColor};
   ${({ offset }) => offset && `transform: translate(${offset.x || 0}, ${offset.y || 0})`};
   ${({ visible }) => !visible && `display: none;`};
   box-shadow: 0 0 20px ${blackerColor};
`;

export const Triangle = styled.div`
   position: absolute;
   left: calc(50% - 9px);
   bottom: calc(100% + 6px);
   width: 0;
   height: 0;
   border-style: solid;
   border-width: 9px 9px 0 9px;
   border-color: ${whitestColor} transparent transparent;
   ${({ offset }) => offset && `transform: translateY(${offset.y || 0})`};
   ${({ visible }) => !visible && `display: none;`};
`;

export const Traget = styled.div``;

export const PopoverGroup = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
   z-index: 666;
`;
