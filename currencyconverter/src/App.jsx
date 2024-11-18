import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500 rounded text-center px-y-0.7'>currency changer</h1>
    </>
  )
}

export default App
