import React, { useState } from 'react';
import Data from './Data';
import './App.css';

function Tree_view() {
  let [nodes, setNodes] = useState({});

  const toggleNode = (label) => {
    setNodes(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  let treeFetch = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.label} style={{ marginLeft: '20px', marginBottom: '6px' }}>
            <div
              className='nav_div'
              onClick={() => item.children && toggleNode(item.label)}
            >
              {item.label}
              {item.children && (
                <span className="material-symbols-outlined">
                  {nodes[item.label] ? 'remove' : 'add'}
                </span>
              )}
            </div>
            {nodes[item.label] && item.children && treeFetch(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {treeFetch(Data)}
    </>
  );
}

export default Tree_view;