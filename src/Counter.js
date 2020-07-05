import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

// Then replace this:
// export default Counter;

// With this:
// Where previously we were exporting the component itself,
// now we’re wrapping it with this connect function call.
export default connect(mapStateToProps)(Counter);
