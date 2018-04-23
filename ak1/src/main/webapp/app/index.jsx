import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from '../app/components/app.jsx'
import registerServiceWorker from '../registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

const theme = createMuiTheme();

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Router>, document.getElementById('root'));
registerServiceWorker();

