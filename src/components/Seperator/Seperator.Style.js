import styled from "styled-components";

export const SeperatorGroup = styled.div`
   box-sizing: border-box;
   width: 100%;
   height: 1px;
   border-bottom: 1px solid ${({theme}) => theme.darkColor};
`;