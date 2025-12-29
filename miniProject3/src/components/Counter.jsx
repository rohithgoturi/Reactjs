import React, {useState} from 'react'

const Counter = () => {
    var [count, setCount] = useState(0);

    function incBy1(){
        setCount(count + 1);
    }
    function decBy1(){
        setCount(count - 1);
    }
    
  return (
    <div className=' m-10'>
        <h1 className=' font-bold text-xl text-center text-yellow-300 uppercase'>Mini Project3 : Counter</h1> 

        <div className=" bg-yellow-300 w-40 h-40 text-black text-9xl text-center font-bold ml-[260px] mt-20">{count}</div>

        <button className=' bg-green-600 px-2.5 py-2.5 mt-2.5 ml-40 font-medium text-2xl' onClick={incBy1}>Increase by 1</button>

        <button className=' bg-green-600 px-2.5 py-2.5 mt-2.5 ml-10 font-medium text-2xl' onClick={decBy1}>Decrease by 1</button>
    </div>
  )
}

export default Counter