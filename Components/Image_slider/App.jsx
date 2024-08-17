import React, {useState} from 'react';
import './App.css';
import reviews from './Data';

function Image_slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };
  
  const handleNextClick = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const handleSurpriseMeClick = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setCurrentIndex(randomIndex);
  };

  const { image, name, job, text } = reviews[currentIndex];

  return (
    <div className='main'>
      <div className='all_reviews_div'>
        <div className='review_div'>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h4>{job}</h4>
          <div className="text_div">
            <p>{text}</p>
          </div>
          <div className='circles'>
            {reviews.map((_, index) => (
              <span key={index}
              onClick={() => setCurrentIndex(index)}
              className={`circle ${index === currentIndex ? 'active' : ''}`}>

              </span>
            ))}
          </div>
          <div className='next_prev_btn'>
            <span className="material-symbols-outlined" onClick={handlePrevClick}>
              arrow_back_ios
            </span>
            <span className="material-symbols-outlined" onClick={handleNextClick}>
              arrow_forward_ios
            </span>
          </div>
          <div>
            <button onClick={handleSurpriseMeClick}>Surprise Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image_slider;
