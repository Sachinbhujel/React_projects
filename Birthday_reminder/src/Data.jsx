import React from 'react'
import './App.css'
import { useState } from 'react'

function Data() {
    let data = [
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      ];

      const [count, setCount] = useState(data.length)
      const [userData, setUserData] = useState(data);

      function clearData(){
        setCount(0);
        setUserData([]);
      }

  return (
    <>
        <div className='main'>
            <h1>{count} Birthdays Today</h1>
            {userData.map((user) => (
                <div key={user.id} className='user_div'>
                    <img src={user.image} className='user_img'/>
                    <div className="user_info">
                        <h2>{user.name}</h2>
                        <p>{user.age} years</p>
                    </div>
                </div>
            ))}
            <button onClick={clearData}>Clear All</button>
        </div>
    </>
  )
}


export default Data