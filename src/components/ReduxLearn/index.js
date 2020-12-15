import React, { Component } from 'react';
// import Wrapper from '/components/Layout'
import Img from '../../assets/icon-redux.svg'
import ButtonGroup from './Button'
import HelloWorld from './HelloWorld'
import reducer from "../../store/reducers/index"
import { createStore } from "redux"
import { connect } from "react-redux"
import {getUserData} from '../../store/actions/GetUser'
const initialState = "React"
const store = createStore(reducer, initialState)
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tech : "React"
        }
    }
    render() {
        const {tech} = this.state
        return (
          <div className="mt-3">
            <HelloWorld key={1} tech={this.props.allUser} />
            <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    allUser: state.getDataUserAll.allUser,
  }
}

export default connect(mapStateToProps, { getUserData })(index)