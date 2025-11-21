import React, { useState } from 'react'
import axios from 'axios'


const App = () => {


  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    const data = response.data
    setData(data)
    console.log(data[0].download_url)
  }

  
  

  return (
    <div onClick={getData} className='p-10'>
      <button className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>
        Get Data
      </button>

      <div className='p-5  bg-gray-950 mt-5'>
        {data.map(function(elem, idx){
          return <div key={idx} className='bg-gray-50 text-black flext items-center w-full px-7 py-6 rounded mb-3'>
            <img src={elem.download_url} alt="" />

            <h1></h1>{elem.author}
          </div>
        })}
      </div>
    </div>
  )
}

export default App