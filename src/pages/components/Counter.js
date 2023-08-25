import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, resetCounter, selectValue } from '../store/counterSlice'
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(selectValue)
  const dispatch = useDispatch()
  const [showCounter, setShowCounter] = useState(false)
  const [incrementAmount, setIncrementAmount] = useState(0);

  const incrementHandler = () => {
    dispatch(increment())
    //dispatch({type: increment})     //also works
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(resetCounter())
  }

  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(Number(incrementAmount)))
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <div>
          <input
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button onClick={incrementByAmountHandler}>incrementByAmount</button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Reset Counter</button>
    </main>
  );
};

export default Counter;
