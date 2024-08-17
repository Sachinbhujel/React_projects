import React from 'react'
import Data from './Data'
import Tree_item from '.';

function Tree_view() {
  return (
    <div>
        {Data.map((item, index) => (
            <Tree_item key={index} item={item}/>
        ))}
    </div>
  )
}

export default Tree_view;