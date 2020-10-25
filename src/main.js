import React from 'react';
import ReactDOM from 'react-dom';

import 'main.css';

import Application from 'Application';
import {ThemeProvider} from "styled-components";
import theme from "theme";

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <Application/>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('actiew')
);