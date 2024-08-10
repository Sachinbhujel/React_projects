import { useState } from 'react'
import './App.css'
import text from './Data';

function App() {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState([]);

  function handleClick() {
    if (count > 8) {
      alert("You can't write more than 8");
    } else{
      setPara(text.slice(0, count));
    }
  }

  return (
    <div className='main'>
      <div className='para_app'>
      <label htmlFor='amount'>paragraphs:</label>
      <div className='input_div'>
        <input
          type='number'
          name='amount'
          id='amount'
          max='8'
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className='btn' onClick={handleClick}>generate</button>
      </div>
      <div className='para_div'>
        {para.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      </div>
    </div>
  )
}

export default App