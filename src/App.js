import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { firebaseAuth } from './Provider/AuthProvider';
import Routes from './router/Routes'
import { Provider } from "react-redux"

// Redux file
import store from "./store/index"
function App() {
  // const { token } = useContext(firebaseAuth); //destructuring
  // if ("spinner" in localStorage) {

  //   localStorage.removeItem("spinner")
  // }
// console.log(token, "test")
  return (
          <Provider store={store}>

    <Router>
      <Switch>
        <Route component={Routes}/>
      </Switch>
    </Router>
          </Provider>

  );
}

export default App;