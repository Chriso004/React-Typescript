import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);
  const title = <h1 id='title'>this is title</h1>
  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);
  return (
    <>
    { title }
    < h3 > total clicks: { count }</h3>
      <button id='increaseButton' onMouseDown={IncreaseCount}>Increase </button>
      <button id='decreaseButton' onMouseDown={DecreaseCount}>Decrease</button>
    </>
  )
}

export default App;