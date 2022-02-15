import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  darkMode,
  decrement,
  increment,
  multiply,
  reset,
} from './counterSlice';
import './Counter.css';

const Counter = () => {
  // The function below is called a selector and allows us to select the state
  // the state.
  const count = useSelector((state) => state.counter.count);
  const isDarkMode = useSelector((state) => state.counter.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div className={isDarkMode ? 'dark' : 'day'}>
      <button
        onClick={() => {
          dispatch(darkMode());
        }}
      >
        {isDarkMode ? 'back' : 'dark mode'}
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        aria-label="multiply"
        onClick={() => {
          dispatch(multiply());
        }}
      >
        *
      </button>
      <button
        aria-label="reset"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
