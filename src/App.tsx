import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import Header from './pages/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router basename="/covid-19-italy">
      <Header title="Covid-19 Italia" />
      <Switch>
        <Route exact path={['/']}>
          <Home />
        </Route>
        <Route path={['/page']}>
          <Page />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
