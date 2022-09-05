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


import './App.css';

const App = () =>
  
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/exercice2' element={<Exercice2 />} />
        <Route path='/*' element={<Exercice1 />} />
      </Switch>
    </Router>

export default App;
