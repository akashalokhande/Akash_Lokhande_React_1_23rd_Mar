const Counter = ({ count, increment, decrement, reset,message}) => {
  return (
    <div className="counter-container">
      <h1>Counter using React</h1>
      <p className="counter">
        Your Current Count is: <span>{count}</span>
      </p>
      <p className="error-message">{message}</p>
      <div className="button-group">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        {count > 10 && <button className="reset-btn" onClick={reset}>GO BACK TO 0</button>}
      </div>
    </div>
  );
};

export default Counter;
