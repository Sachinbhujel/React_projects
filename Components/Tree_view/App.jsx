import React, {useState} from 'react'
import Data from './Data'
import './App.css'

function Tree_view() {
    
  let [data, setData] = useState(Data)

  function handleClick(currentIndex){
    alert(currentIndex);
  }

  let treeFetch = (items) => {
    return(
        <ul>
            {items.map((item,index) => (
                <div key={index}>
                    <li style={{ marginLeft: '20px', marginBottom: "6px"}} onClick={() => handleClick(index)}>
                        <div className='nav_div'>
                          {item.label}
                          <span className="material-symbols-outlined">add</span>
                        </div>
                        {item.children && treeFetch(item.children)}                        
                    </li>
                </div>
            ))}
        </ul>
    )
  }
  
  return (
    <>
      {treeFetch(data)}  
    </>
  )
}

export default Tree_view