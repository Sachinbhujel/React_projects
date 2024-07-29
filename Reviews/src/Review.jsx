import React, { useState } from 'react';
import reviews from './Data';
import './App.css';

function Review() {
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
        <div className='all_reviews_div'>
            <div className='review_div'>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <h4>{job}</h4>
                <div class="text_div">
                    <p>{text}</p>
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
    );
}

export default Review;