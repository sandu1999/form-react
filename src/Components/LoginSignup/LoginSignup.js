import React from 'react'
import './LoginSignup.css'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const LoginSignup = () => {
  return (
   <div className='main-container'>
    <div className='left-side'>
    <div className='creative'><span>C</span>reative</div>
    </div>
    <div className='rigt-side'>
    <div className='new-user'>new User?<span>sign up</span></div>
    </div>
    <div className='welcome'>Wecome Back!</div>
    <div className='login'>Login to continue</div>
    <div className='inputs'>
      <div className='input'>
        <img src={email_icon} alt=''/>
        <input type='email' placeholder='Enter Email'/>
      </div>
      <div className='input'>
        <img src={password_icon} alt=''/>
        <input type='password' placeholder='Enter Password'/>
      </div>
      </div>


   </div>
    
  )
}

export default LoginSignup