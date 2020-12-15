
import React, { Component } from "react"
import {getUserData} from '../../store/actions/GetUser'
import { connect } from "react-redux"
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies : this.props.technologies
    }
  }
  Handler = (e) => {
    const tech = e
    console.log(tech)
    this.props.getUserData(tech)
  }
  render() {
    const {technologies} = this.state
    return (
      <div className="text-center mt-3">
        {technologies.map((tech, i) => (
          <button
            onClick={() => this.Handler(tech)}
            data-tech={tech}
            key={`btn-${i}`}
            className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {tech}
          </button>
        ))}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    allUser: state.getDataUserAll.allUser,
  }
}
export default connect(mapStateToProps, { getUserData })(Button)
