import { useFormik } from 'formik';
import React from 'react';

function Login() {
    var loginForm = useFormik({
            initialValues:{
              username:"",
              password:"",
              mobile:"",
              role:"User Login"
            }
        })
      return (
        <div>
            <h2 className='mb-4'>User Login</h2>
            <form onSubmit={loginForm.handleSubmit}>
            <label className='mb-1 '>Username:</label><br/>
                <input type='text' {...loginForm.getFieldProps('username')} placeholder='Enter your name'/><br/><br/>
            <label className='mb-1 '>Password:</label><br/>
                <input type='text' {...loginForm.getFieldProps('password')} placeholder='Enter password'/><br/><br/>
            <label className='mb-1 '>Mobile Number:</label><br/>
                <input type='text' {...loginForm.getFieldProps('mobile')} placeholder='Mobile Number'/><br/><br/>
            <button className='ms-5'>Submit</button>
            </form>
        </div>
      )
}

export default Login