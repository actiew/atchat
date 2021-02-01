import axios from "axios";
import { useEffect, useState } from "react";
import { redColor } from "src/theme/theme";
import { css } from "styled-components";


const API = process.env.REACT_APP_API_URL;

export const circle = color => css`
   border-radius: 50%;
   background: ${color};
`;

export const activeBar = width => css`
   &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      width: ${width}px;
      height: 100%;
      background: ${redColor};
      transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1);
   }
`;

export const useData = path => {
   const [result, setResult] = useState([]);

   useEffect(() => {
      axios.get(`${API}/${path}`)
      .then(async response => {
         if (response.status === 200) {
            setResult(await response.data);
         }
      })
      .catch(error => console.log(error));
   }, [path]);

   return result;
};
