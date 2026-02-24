import React from 'react';
import "./Password-forget.css"
import "../Register/Register"


const PasswordForget = () => {
  return (
    <div className='body'>
        <div className='wrapper'>
            <form action=''>
                <h1>Password Reset</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Email' required />
                </div>
{/* 
                <div className='remember-forget'>
                    <label><input type='checkbox' />Remember me</label>
                    <a href='../password-forget'>Forgot Password?</a>
                </div> */}

                <button type='submit'>Send Link</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href='../Register'>Register</a></p>
                </div>
            </form>
        
        </div>
    </div>
  )
}

export default PasswordForget

