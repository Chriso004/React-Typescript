import React, { useState } from 'react';

interface AppState {
  count: number;
}

const App = () => {
  const [countState, setCount] = useState<AppState>({count: 0});
  const title = <h1 id='title'>this is title</h1>

  const IncreaseCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCount({count: countState.count + 1});
  }

  const DecreaseCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCount({count: countState.count - 1});
  }

  return (
    <>
      {title}
      <h3> total clicks: {countState.count}</h3>
      <button id='increaseButton' onMouseDown={IncreaseCount}>Increase</button>
      <button id='decreaseButton' onMouseDown={DecreaseCount}>Decrease</button>
    </>
  )
}

export default App;