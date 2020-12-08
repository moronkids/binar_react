import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom' // ini buat routing dari reactjs, must installing first
import SignInx from './pages/SignIn'
import Home from './pages/Home' // home -> menjadi sebuah component
import './App.css';
import { firebaseAuth } from './Provider/AuthProvider';

// importpages
import SuperCentered from './components/SuperCentered';
import Pancake from './components/Pancake';
import Sidebar from './components/Sidebar';
import Stack from './components/Stack';
import HolyGrail from './components/HolyGrail';
import SpanGrid from './components/SpanGrid';
import Ram from './components/Ram';
import LineUp from './components/LineUp';
import Clamping from './components/Clamping';
import Respect from './components/Respect';
import Challenge1 from './components/Challenge1';
import Challenge2 from './components/Challenge2';
import Challenge3 from './components/Challenge3';
import LiList from './components/Challenge2/LiList';
import Functional from './components/Challenge2/Functional';
import TodoList1 from './components/todolist/Phase1';
import Layout from './components/Layout'
import About from './components/blog/about'
import Homey from './components/blog/home'
function App() {
  const { token } = useContext(firebaseAuth); //destructuring
  // if ("spinner" in localStorage) {

  //   localStorage.removeItem("spinner")
  // }
console.log(token, "test")
  return (

    <Layout>
    <Switch>
          {" "}
          {/* ini gaya penulisan dari react router dom, yang memumngkinkan agar route bisa berjalan* /}
        {/* route allows you to render by url path */}
          <Route
            exact
            path="/"
            render={(props) =>
              token === null && !("token" in localStorage) ? <SignInx /> : <Home />
            }
            />
          {/* <Route exact path='/signin' component={SignInx} /> */}
          {/* <Route exact path='/home' component={Home} /> */}
          <Route exact path="/challange1" render={(props) => <Challenge1 />}></Route>
          <Route exact path="/challange2" render={(props) => <Challenge2 />}></Route>
          <Route exact path="/challange3" render={(props) => <Challenge3 />}></Route>
          <Route exact path="/1" render={(props) => <SuperCentered />}></Route>
          <Route exact path="/challenge2/1" render={(props) => <LiList />}></Route>
          <Route
            exact
            path="/challenge2/2"
            render={(props) => <Functional />}
          ></Route>
          <Route
            exact
            path="/challenge3/1"
            render={(props) => <TodoList1 />}
          ></Route>
          <Route
            exact
            path="/challenge3/2"
            render={(props) => <Functional />}
          ></Route>
          <Route exact path="/2" render={(props) => <Pancake />}></Route>
          <Route exact path="/3" render={(props) => <Sidebar />}></Route>
          <Route exact path="/4" render={(props) => <Stack />}></Route>
          <Route exact path="/5" render={(props) => <HolyGrail />}></Route>
          <Route exact path="/6" render={(props) => <SpanGrid />}></Route>
          <Route exact path="/7" render={(props) => <Ram />}></Route>
          <Route exact path="/8" render={(props) => <LineUp />}></Route>
          <Route exact path="/9" render={(props) => <Clamping />}></Route>
          <Route exact path="/10" render={(props) => <Respect />}></Route>
          <Route exact path="/about" render={(props) => <About />}></Route>
          <Route exact path="/home" render={(props) => <Homey />}></Route>
        </Switch>
      </Layout>

  )
}

export default App;