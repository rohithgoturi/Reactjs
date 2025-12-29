import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[index])
  

  let printUserData = <h3 className='text-gray-300 text-xs font-semibold absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'><div className=' h-60 w-74 bg-white rounded-2xl'>
        <img className=' h-full w-full object-cover' src={elem.download_url} alt="" />
      </div></a>

      <div><h2 className=' font-bold text-lg'>{elem.author}</h2></div>
      </div>;
    })
  }

  return (
    <div>

      <div className=' overflow-auto flex flex-wrap gap-2.5 m-2.5'>
        {printUserData}
      </div>

      <div className=' flex justify-center gap-2.5 active:scale-95'>
        <button onClick={()=> {
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
          
        }} 
        className=' bg-amber-700 text-white text-xl rounded-lg m-2.5 px-2.5 py-2.5 active-scale-95'> Prev </button>

        <h3 className='text-white text-xl rounded-lg m-2.5 px-2.5 py-2.5'>Page {index}</h3>
        <button onClick={()=> {
          setIndex(index+1)
          setUserData([])
        }} 
        className=' bg-amber-700 text-white text-xl rounded-lg m-2.5 px-2.5 py-2.5 '> Next </button>
      </div>
    </div>
  )
}

export default App