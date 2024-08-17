import React from 'react'
import Tree_view from './Tree_item';

function Tree_item({item}) {
  return (
    <div>
        <li>
            <p>{item.label}</p>
        </li>
    </div>
  )
}

export default Tree_item;