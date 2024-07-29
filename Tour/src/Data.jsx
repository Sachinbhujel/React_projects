import React, { useState, useEffect } from 'react';
import './App.css'

function Data() {
    const [tour, setTour] = useState([]);
    const [showMore, setShowMore] = useState(null);

    useEffect(() => {
        const url = "https://www.course-api.com/react-tours-project";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTour(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    const handleBtn = (id) => {
        setTour(tour.filter(tour => tour.id !== id));
    }

    return (
        <div className='tours_div'>
            {tour.length === 0 ? (
                <h3 id="tour_left">No Tour Left</h3>
            ) : (tour.map((tourItem) => (
                <div key={tourItem.id} className='tour_div'>
                    <div className="img_div">
                        <img src={tourItem.image}/>
                        <div>
                            <p>${tourItem.price}</p>
                        </div>
                    </div>
                    <div className="tour_info_div">
                        <h2>{tourItem.name}</h2>
                        <p>
                            {showMore ? tourItem.info : `${tourItem.info.substring(0, 161)}...`}
                            <button onClick={() => toggleShowMore()} className='toggleBtn'>
                                {showMore ? 'Show Less' : 'Show More'}
                            </button>
                        </p>
                    </div>
                    <div className="btn_div">
                        <button className='notInterestedBtn' onClick={() => handleBtn(tourItem.id)}>Not Interested</button>
                    </div>
                </div>
            ))) 
            }
        </div>
    );
}

export default Data;