import React, { useContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom" // ini buat routing dari reactjs, must installing first
import SignInx from "../pages/SignIn"
import Home from "../pages/Home" // home -> menjadi sebuah component

import { firebaseAuth } from "../Provider/AuthProvider"
// importpages
import SuperCentered from "../components/SuperCentered"
import Pancake from "../components/Pancake"
import Sidebar from "../components/Sidebar"
import Stack from "../components/Stack"
import HolyGrail from "../components/HolyGrail"
import SpanGrid from "../components/SpanGrid"
import Ram from "../components/Ram"
import LineUp from "../components/LineUp"
import Clamping from "../components/Clamping"
import Respect from "../components/Respect"
import Challenge1 from "../components/Challenge1"
import Challenge2 from "../components/Challenge2"
import Challenge3 from "../components/Challenge3"
import Challenge4 from "../components/Challenge4"
import LiList from "../components/Challenge2/LiList"
import Functional from "../components/Challenge2/Functional"
import TodoList1 from "../components/todolist/Phase1"
import Layout from "../components/Layout"
import About from "../components/blog/about"
import Homey from "../components/blog/home"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ListUser from "../components/fetch/ListUser"
import fetchAll from "../components/fetch/fetchRandom"
import fetchGerman from "../components/fetch/fetchGermany"
import fetchTurkey from "../components/fetch/fetchTurkey"
import fetchGithub from "../components/fetch/fetchGithub"
import Redux from "../components/ReduxLearn/index"
const Routes = () => {
  const { token } = useContext(firebaseAuth) //destructuring
  console.log(token, "TOKEN dari routes")
  const AppRoute = ({
    component: Component,
    layout: Layout,
    auth: Auth,
    ...rest
  }) => (
    <Auth>
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    </Auth>
  )
  const Guest = (props) => props.children
  const Login = (props) => {
    return (
      <>
        <Layout>{props.children}</Layout>
      </>
    )
  }
  const UserIn = (props) =>
    localStorage.token ? props.children : <Redirect to="/signin" />
  const NonLogin = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>
  }
  return (
    <section>
      <Switch>
        <AppRoute
          exact
          path="/about"
          layout={Login}
          token={token}
          auth={Guest}
          component={About}
        />
        <Route exact path="/signin" component={SignInx} />
        <AppRoute
          exact
          path="/"
          layout={Login}
          token={token}
          auth={Guest}
          component={Home}
        />

        <AppRoute
          exact
          path="/challange1"
          layout={Login}
          token={token}
          auth={UserIn}
          component={Challenge1}
        />
        <AppRoute
          exact
          path="/challange2"
          layout={Login}
          token={token}
          auth={UserIn}
          component={Challenge2}
        />
        <AppRoute
          exact
          path="/challange3"
          layout={Login}
          token={token}
          auth={UserIn}
          component={Challenge3}
        />
        <AppRoute
          exact
          token={token}
          layout={Login}
          auth={UserIn}
          path="/1"
          component={SuperCentered}
        />
        <AppRoute
          exact
          path="/challenge2/1"
          layout={Login}
          token={token}
          auth={UserIn}
          component={LiList}
        />
        <AppRoute
          exact
          path="/challenge2/2"
          layout={Login}
          token={token}
          auth={UserIn}
          component={Functional}
        />
        <AppRoute
          exact
          path="/challenge3/1"
          layout={Login}
          token={token}
          auth={UserIn}
          component={TodoList1}
        />
        <AppRoute
          exact
          path="/challenge3/2"
          layout={Login}
          token={token}
          auth={UserIn}
          component={Functional}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/2"
          layout={Login}
          component={Pancake}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/3"
          layout={Login}
          component={Sidebar}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/4"
          layout={Login}
          component={Stack}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/5"
          layout={Login}
          component={HolyGrail}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/6"
          layout={Login}
          component={SpanGrid}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/7"
          layout={Login}
          component={Ram}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/8"
          layout={Login}
          component={LineUp}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/9"
          layout={Login}
          component={Clamping}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/10"
          layout={Login}
          component={Respect}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/fetch"
          layout={Login}
          component={ListUser}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/challange4"
          layout={Login}
          component={Challenge4}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/challenge4/1"
          layout={Login}
          component={ListUser}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/challenge4/2"
          layout={Login}
          component={fetchTurkey}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/challenge4/3"
          layout={Login}
          component={fetchGerman}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/challenge4/4"
          layout={Login}
          component={fetchAll}
        />
        <AppRoute
          exact
          token={token}
          auth={UserIn}
          path="/challenge4/5"
          layout={Login}
          component={fetchGithub}
        />
        <AppRoute
          exact
          token={token}
          auth={Guest}
          path="/redux"
          layout={Login}
          component={Redux}
        />
      </Switch>
    </section>
  )
}

export default Routes
