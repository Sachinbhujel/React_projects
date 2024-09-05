import React from 'react'
import Fetch from './Fetch'

function UserFet() {

    let [data] = Fetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
        {data && data.map((item) => (
            <div key={item.id}>
                <h1>{item.title}</h1>
            </div>
        ))}
    </div>
  )
} 

export default UserFet