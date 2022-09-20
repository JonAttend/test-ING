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
import Error404 from './pages/Error404';
import Exercice2 from './pages/Exo2';

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
          <Error404 />
        </Route>
      </Switch>
    </Router>

export default App;
