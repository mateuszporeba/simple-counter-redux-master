import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectValue } from '../store/counterSlice'
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(selectValue)
  const dispatch = useDispatch()
  const [showCounter, setShowCounter] = useState(false)

  console.log(counter)

  const incrementHandler = () => {
    dispatch(increment())
    //dispatch({type: increment})     //also works
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const toggleCounterHandler = () => {
    setShowCounter(!showCounter)
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter ? counter : '-- COUNTER VALUE --'}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
