import React, { useState } from 'react'
import './App.css'
import questions from './Questions'

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index){
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className='main'>
    <div className='accordian_div'>
      {questions.map((item, index) => (
        <div key={item.id} className='accordian_item'>
          <div className='accordian_title' onClick={() => handleToggle(index)}>
            <div className='title'>{item.title}</div>
            <div>
              {activeIndex === index ? 
                (<span class="material-symbols-outlined">
                remove
                </span>) : 
                (<span class="material-symbols-outlined">
                  add
                </span>)}
            </div>
          </div>
          {activeIndex === index && <div className="accordian_content">{item.info}</div>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default App
