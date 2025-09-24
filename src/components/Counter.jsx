import { useState } from 'react'

const Counter = () => {

let [count, setCount] = useState(0)

  const addValue = () => {
    if (count < 15) {
      setCount(count + 1)
    }
  }

  const delValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

    return (
        <div className="counterHolder">
        <div className="counter">
          <button onClick={delValue} >−</button>
          <span>{count}</span>
          <button onClick={addValue}>+</button>
        </div>
      </div>
    );
};

export default Counter;