import React from 'react'
import "./Register.css"
import "../Account/Account"

const Register = () => {
  return (
    <div className='body'>
        <div className='wrapper'>
            <form action=''>
                <h1>Register</h1>
            </form>
            <div className='input-box'>
                    <input type='text' placeholder='Email' required />
            </div>
            
            <div className='input-box'>
                    <input type='text' placeholder='Username' required />
            </div>
            
            <div className='input-box'>
                <input type='text' placeholder='Password' required />
            </div>

            <div className='remember-forget'>
                <label><input type='checkbox' />Sign me up for the newsletter</label>
                {/* <a href='#'>Forgot Password?</a> */}
            </div>

            <button type='submit'>Register</button>

            <div className='register-link'>
                <p>Already have an account? <a href='../Account'>Sign In</a></p>
            </div>
        </div>
      
    </div>
  )
}

export default Register
