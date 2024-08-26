import React, {useState} from 'react'
import './App.css'

function Tabs() {
  let [activeTab, setActiveTab] = useState("London")

  function openCity(cityName){
    setActiveTab(cityName);
  }

  return (
    <div className="main">
      <div class="tab">
        <button className="tablinks" onClick={() => openCity('London')}>London</button>
        <button className="tablinks" onClick={() => openCity('Paris')}>Paris</button>
        <button className="tablinks" onClick={() => openCity('Tokyo')}>Tokyo</button>
      </div>

        <div className='tab_div' style={{display : activeTab === "London" ? "block" : "none" }}>
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
        <div className='tab_div' style={{display : activeTab === "Paris" ? "block" : "none" }}>
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p> 
        </div>
        <div className='tab_div' style={{display : activeTab === "Tokyo" ? "block" : "none" }}>
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
    </div>
  )
}

export default Tabs