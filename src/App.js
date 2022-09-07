import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import components
import Navbar from './components/Navbar';

// import pages
import Home from './pages/Home';
import Exercice1 from './pages/Exercice1';
import Exercice2 from './pages/Exercice2';

import './App.scss';

const App = () =>
  
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/exercice2">
          <Exercice2 />
        </Route>
        <Route exact path="/*">
          <Exercice1 />
        </Route>
      </Switch>
    </Router>

export default App;
