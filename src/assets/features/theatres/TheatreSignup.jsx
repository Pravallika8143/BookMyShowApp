import { useFormik } from 'formik';
import React from 'react';

function TheatreSignup() {
    var theatreForm = useFormik({
        initialValues:{
            username:"",
            password:"",
            mobile:"",
            role:"Theatre Owner"
        }
    })
  return (
    <div>
        <h2 className='mb-4'>Theatre Signup</h2>
        <form onSubmit={theatreForm.handleSubmit}>
        <label className='mb-1 '>Username:</label><br/>
            <input type='text' {...theatreForm.getFieldProps('username')} placeholder='Enter your name'/><br/><br/>
        <label className='mb-1 '>Password:</label><br/>
            <input type='text' {...theatreForm.getFieldProps('password')} placeholder='Enter password'/><br/><br/>
        <label className='mb-1 '>Mobile Number:</label><br/>
            <input type='text' {...theatreForm.getFieldProps('mobile')} placeholder='Mobile Number'/><br/><br/>
        <button className='btn btn-primary ms-5'>Submit</button>
        </form>
    </div>
  )
}

export default TheatreSignup;