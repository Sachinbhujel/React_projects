import { useState } from 'react'
import people from './Data'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { image, name, title, quote } = people[currentIndex];

function handlePrev(){
  setCurrentIndex(currentIndex === 0 ? people.length - 1 : currentIndex - 1);
}

function handleNext(){
  setCurrentIndex(currentIndex === people.length - 1 ? 0 : currentIndex + 1);
}


  return (
    <>
      <div className='main'>
        <div key={currentIndex} className="user_div">
          <div className='arrow_button' onClick={handlePrev}>
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
          </div>
          <div className='user_div_info'>
            <img src={image} />
            <h2>{name}</h2>
            <p>{title}</p>
            <p>{quote}</p>
          </div>
          <div className='arrow_button' onClick={handleNext}>
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;