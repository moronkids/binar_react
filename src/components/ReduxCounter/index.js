import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCounter } from "../../store/actions/GetUser"
function mapStateToProps(state) {
    return {
      counter: state.getCounterAll.counter,
    }
}



class index extends Component {
  Trigger = (args) => {
    console.log(args)
    const e = args
    this.props.getCounter(args)
  }
  render() {
    return (
      <div className="Counter text-center mb-4">
        <h2>Counter</h2>
        <div className="flex justify-center">
          <button
            className="cursor-pointerwhitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={() =>
              this.props.dispatch({
                type: "DECREMENT",
                // payload: this.props.counter,
              })
            // onClick={() => this.Trigger("DECREMENT")}
            }
          >
            -
          </button>
          {/* change to props */}
          <span className="counter text-center ml-3 mr-3">
            {" "}
            {this.props.counter}{" "}
          </span>
          <button
            className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={() => this.Trigger("INCREMENT")}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getCounter })(index)
