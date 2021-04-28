import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Vaccini from './pages/Vaccini';
import Regione from './pages/Regione';
import Header from './pages/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router basename="/covid-19-italy">
      <Switch>
        <Route exact path="/">
          <Redirect to="/epidemia/99" />
        </Route>

        <Route exact path={['/epidemia/:regione']}>
          <Header
            title="Covid-19 Italia"
            subtitle="Andamento epidemia"
            linkName="Vaccini"
            link="/vaccini"
          />
          <Home />
        </Route>

        <Route path={['/vaccini']}>
          <Header
            title="Covid-19 Italia"
            subtitle="Andamento campagna vaccinale"
            linkName="Home"
            link="/"
          />
          <Vaccini />
        </Route>
        <Route path={['/regione/:code']}>
          <Regione />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
