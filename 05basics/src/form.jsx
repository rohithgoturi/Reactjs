import React, { useState } from 'react'


const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("hello");
  }


  const [username, setUsername] = useState("")

  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}}>
        <input 
        value={username}
        onChange = {(e)=> {
          setUsername(e.target.value)
        }}
        className='px-4 py-3 text-xl m-5 bg-amber-50 text-black' 
        type="text" 
        placeholder='Enter Your name : '
        />

        <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded m-5 text-white' >Submit</button>
      </form>
    </div>
  )
}

export default App