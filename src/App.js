import './App.css';
import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Ejemplo de cuando NO usar useCallback
  const incrementWithoutCallback = () => {
    console.log('soy render sin callback', count)
    setCount(count + 1);
  };

  // Ejemplo de cuando usar useCallback
  const incrementWithCallback = useCallback(() => {
    console.log('soy render con usecallback', count)
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  }, [count]);

  // console.log(incrementWithoutCallback)
  // console.log(incrementWithoutCallback)
  // console.log(count)

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={incrementWithoutCallback}>
        Increment Without Callback
      </button>

      <button onClick={incrementWithCallback}>Increment With Callback</button>
    </div>
  );
}

export default App;



