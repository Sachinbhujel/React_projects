import React, {useState} from 'react'
import './App.css'
import menu from './Data'

function App() {
  const [category, setCategory] = useState('All');

  const handleClick = (cate) => {
    setCategory(cate);
  };

  const filteredMenu = category === 'All' ? 
  menu : 
  menu.filter(item => item.category == category);

  return (
    <div className='main'>
      <h1>Our Menu</h1>
      <div className='filter_buttons'>
        <button onClick={() => handleClick('All')}>All</button>
        <button onClick={() => handleClick('Breakfast')}>Breakfast</button>
        <button onClick={() => handleClick('Lunch')}>Lunch</button>
        <button onClick={() => handleClick('Shakes')}>Shakes</button>
      </div>
      <div className='all_item_div'>
      {filteredMenu.map((item, index) => (
          <div key={index} className="item_div">
            <div className='item_img'>
              <img src={item.img}/>
            </div>
            <div className='item_info'>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
            <div className='item_content'>
              <p>{item.desc}</p>
            </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default App
