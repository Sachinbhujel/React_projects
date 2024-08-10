import React, { useState } from "react"; 
import './App.css'

const App = () => { 

  const [errorMessage, setErrorMessage] = useState(''); 
	
  const validateCard = (value) => { 
    if (value.length === 16) { 
      setErrorMessage('Valid Credit Card Number'); 
    } else { 
      setErrorMessage('Enter a valid Credit Card Number!'); 
    } 
  }; 

  return ( 
    <div className="container"> 
      <div className="main"> 
        <h2>Validating Credit Card</h2> 
        <p>Enter Credit Card: </p>
        <input 
          type="text"
          onChange={(e) => validateCard(e.target.value)}
        />
        <br /> 
        <span>{errorMessage}</span> 
      </div> 
    </div> 
  ); 
}; 

export default App;
