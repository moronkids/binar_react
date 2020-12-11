import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { firebaseAuth } from './Provider/AuthProvider';
import Routes from './router/Routes'
function App() {
  // const { token } = useContext(firebaseAuth); //destructuring
  // if ("spinner" in localStorage) {

  //   localStorage.removeItem("spinner")
  // }
// console.log(token, "test")
  return (
    <Router>
      <Switch>
        <Route component={Routes}/>
      </Switch>
    </Router>

  );
}

export default App;