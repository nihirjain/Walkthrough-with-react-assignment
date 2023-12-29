
import './App.css'
import Signin from '../../components/Sign-up'
import Signup from '../../components/Sign-in'
import { useState } from 'react'
function App() {
  
let [bollen,Setbollen] = useState(true);
  return (
    <>
      <div className='Parent'>
        <div className='Form-wrapper'>
          <div className='Logo'><img className='Instaimage' src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png" alt="" /></div>
          <div className='Feilds'>
              {(bollen)?<Signin/>:<Signup/>}
          </div>
          <div className='footer'>
            <div className='footer-head'>{(bollen)?<span>Dont have Account?</span>:<span>have an Account?</span>}</div>
            <div><button onClick={()=>{Setbollen(!bollen)}}>{(bollen)?<span>Sign Up</span>:<span>Login</span>}</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
