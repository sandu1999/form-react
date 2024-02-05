import React from 'react'
import './LoginSignup.css'
import facebook_icon from '../Assests/icons8-facebook-48.png'
import google_icon from '../Assests/icons8-google-48.png'
import twitter_icon from '../Assests/icons8-twitter-48.png'
import picture from '../Assests/sign-page-abstract-concept-illustration_335657-3875.avif'
import cover from '../Assests/new.png'



const LoginSignup = () => {
  
  
  return (
   <div className='main-container'>
  {/* <img src={cover} alt=''/> */}
    
    <div className='left-side'>
    <div className='creative'><span>C</span>reative</div>
    <img src={picture} alt=''/>
    </div>
    
    
    <div className='rigt-side'>
    <div className='new-user'>new User?<span>sign up</span></div>
    <div className='welcome'>Wecome Back!</div>
    <div className='login'>Login to continue</div>
    <div className='inputs'>
      <div className='input'>
        
        <input type='email' placeholder='Enter Email'/>
      </div>
      <div className='input'>
       
        <input type='password' placeholder='Enter Password'/>
      </div>
      

</div>
      <div className='last'>
      <button className='button'>Login</button>
      <p className='para'>foget password?</p>
      </div>
      <div className='final'>
      <p className='lo'>Login with</p>
      <div className='img'>
      <img src={facebook_icon} alt=''/>
      <img src={twitter_icon} alt=''/>
      <img src={google_icon} alt=''/>
      </div>
      </div>
        
     
   
     
      
     
    </div>
  


   </div>
    
  )
}

export default LoginSignup