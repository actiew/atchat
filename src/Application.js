import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChatApp } from "src/components/ChatApp/ChatApp";

import * as theme from "src/theme/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";


const GlobalStyle = createGlobalStyle`
   *::-webkit-scrollbar {
      display: none;
   }

   html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      font-size: 10px;
   }

   body {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      width: 100vw;
      height: 100vh;
      font-size: 1.6rem;
      background: #FFFFFF;
      font-family: Mulish, Sen, "JetBrains Mono", "PingFang SC", -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
   }
`;

function Application () {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <ChatApp/>
         </ThemeProvider>
      </Router>
   );
}

export default Application;
