import React from 'react'

function User() {
  return (
    <div className='user_info'>
        <img src="https://images.pexels.com/photos/20359974/pexels-photo-20359974/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
        <h2>Laura Smith</h2>
        <span>Frontend Developer</span>
        <p>Laurasmith.website</p>
        <div className='buttons'>
            <button>Email</button>
            <button>Linkedin</button>
        </div>
    </div>
  )
}

export default User