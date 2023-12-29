
import { useState } from 'react'
import './App.css'

function App() {
 
  let [counter , setcounter] = useState(0);
  return (
    <>
      <div className='Parent'>
        <div className='Counter-Wrapper'>
          <div className='Counter'>{counter}</div>
          <div className='Buttons'>
            <button onClick={()=>{setcounter(counter + 1)}}>Increament</button>
            <button onClick={()=>{setcounter(counter - 1)}}>Decreament</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
