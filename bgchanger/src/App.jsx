import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200 '
     style={{backgroundColor:color}}
     >
      <div className='fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-3xl'
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >red</button>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-3xl'
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >blue</button>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-3xl'
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >green</button>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-3xl'
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColor("yellow dark")}
          >yellow</button>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-3xl'
          style={{backgroundColor:"orange"}}
          onClick={()=>setColor("orange")}
          >orange</button>
          </div>
      </div>
     </div>
      
    </>
  )
}

export default App
