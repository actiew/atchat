import styled from "styled-components";

export const Slider = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   border-radius: 17px;
   background: ${({theme}) => theme.grayColor};
   
   &::before {
      display: block;
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 30px;
      height: 30px;
      background: ${({theme}) => theme.whiteColor};
      border-radius: 50%;
      transition: 0.4s ease-in-out;
   }
`;

export const Checkbox = styled.input.attrs({type: "checkbox"})`
   width: 0;
   height: 0;
   opacity: 0;
   
   :checked + ${Slider} {
      background: ${({theme}) => theme.greenColor};
      
      ::before {
          transform: translateX(30px);
      }
   }}
`;

export const SwitchGroup = styled.label`
   display: flex;
   align-items: center;
   position: relative;
   width: 66px;
   height: 36px;
   cursor: pointer;
`;