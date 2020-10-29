import "Application.css";
import { ChatApp } from "components/ChatApp/ChatApp";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "theme";

function Application() {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <ChatApp/>
         </ThemeProvider>
      </Router>
   );
}

export default Application;