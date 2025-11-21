import React from 'react'

const Card = (props) => {

    console.log(props.user);
  return (
    <div className='text-3xl bg-white text-black inline-block p-6 text-center rounded'>
        <h1>Username Surname</h1>
        <h2>City, Age</h2>
        <button>Add Friend</button>
    </div>
  )
}

export default Card