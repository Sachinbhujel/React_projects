import React, { useState } from 'react';
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    if (password.length >= 8) {
      setMessage('The password is strong');
    } else {
      setMessage('The password is weak');
    }
  };

  return (
    <div className='container'>
      <div className='main'>
      <h2>Password Validation</h2>
      <input
        type="text"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
        <button onClick={handleClick}>Check Password</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;