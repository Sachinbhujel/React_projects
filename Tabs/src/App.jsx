import { useEffect, useState } from 'react';
import './App.css';
import localData from './Data'; // Rename the imported data to avoid conflict

function App() {
  const [data, setData] = useState([]);
  const [selectedName, setSelectedName] = useState('TOMMY');

  useEffect(() => {
    setData(localData);
  }, []);

  
  const handleSelectName = (name) => {
    setSelectedName(name);
  };


  return (
    <div className='main'>
      <div className='user_names'>
        <p onClick={() => handleSelectName('TOMMY')}>TOMMY</p>
        <p onClick={() => handleSelectName('BIGDROP')}>BIGDROP</p>
        <p onClick={() => handleSelectName('CUKER')}>CUKER</p>
      </div>
      <div className='all_tabs_div'>
        {data.filter(item => item.company === selectedName).map((item, index) => (
          <div key={index} className='tab_div'>
            <h2>{item.title}</h2>
            <h3>{item.company}</h3>
            <p>{item.dates}</p>
            <div className='duty_div'>
              {item.duties.map((duty, dutyIndex) => (
                <ul key={dutyIndex}>
                  <li> {dutyIndex + 1}. {duty}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;