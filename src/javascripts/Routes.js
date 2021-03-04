import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Header from './pages/HeaderBlock';
import NoMatch from './pages/NotFoundPage';
import TodoContainer from './containers/todoContainer';

export default class Routes extends React.Component {
  render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component = { Home } />
                <Route exact path="/about-us" component = { About } />
                <Route exact path="/todos" component = { TodoContainer } />
                <Route  path='*' component={ NoMatch } />
            </Switch>
        </div>
    );
  }
}
