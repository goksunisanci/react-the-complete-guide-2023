import { useSelector, useDispatch } from "react-redux"

import { counterActions } from "../store/counter";

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }

  const handleIncrease = () => {
    dispatch(counterActions.increase(10)) // {type:  SOMe_UNIQUE_IDENTIFIER, payload: 10}
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  const handleToggleCounter = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter


// import { Component } from "react";
// import { connect } from "react-redux"

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment()
//   }
//   handleDecrement() {
//     this.props.decrement()
//   }
//   handleToggleCounter() {}


//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={handleToggleCounter}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
