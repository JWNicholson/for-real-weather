import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import './index.css';
import App from './App';



const theme = createMuiTheme ({
  palette: {
    primary:{
      main: blue[900]
    },
    secondary:{
      main: green[500],
      contrastText:"#f5f5f5",
    },

  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


