import React, {useState, useEffect} from 'react'
import './App.css'

function Theme_generator() {
  let [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleClick(){
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div>
      <h1>Theme Change</h1>
      <p>jhgf</p>
      <button onClick={handleClick}>Theme</button>
    </div>
  )
}

export default Theme_generator