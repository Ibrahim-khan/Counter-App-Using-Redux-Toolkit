import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, reset, increaseByAmount} from "./counterSlice"

const CounterView = () => {
    const count = useSelector((state) = state.counter.count);
  
    const dispatch = useDispatch();

    return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Decrement</button>
      <button onClick={() => {dispatch(reset())}}>Reset</button>
      <button onClick={() => {dispatch(increaseByAmount(5))}}>IncreaseBy5</button>
    </div>
  )
}

export default CounterView;
