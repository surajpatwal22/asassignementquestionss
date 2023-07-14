import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='count-container'>
        <h1>{count}</h1>
        <br />
        <button className='btn-i' onClick={()=>{setCount(count+1)}}>Increment</button>
        <button className='btn-d' onClick={()=>{ setCount(count-1)}}>Decrement</button>
      </div>
    </div>
  )
}

export default App
