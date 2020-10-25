import styled from "styled-components";

export const IconGroup = styled.div`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: ${({size}) => size}px;
   height: ${({size}) => size}px;
   
   svg,
   svg * {
      width: 100%;
      height: 100%;
      ${({color}) => (color ? `fill: ${color}` : "")};
      ${({opacity}) => (opacity ? `opacity: ${opacity}` : "")};
   }
`;