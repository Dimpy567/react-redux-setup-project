import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import AppRouter from './Routes';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
  }
}
