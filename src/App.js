import React from 'react';
import './App.css';
import Nav from './Naw';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/Shop" component={Shop}/>
      </Switch>    
    </div>
    </Router>
  );
}
const Home = () => (
  <div>
      <h1>Home Page</h1>
  </div>
);
export default App;
