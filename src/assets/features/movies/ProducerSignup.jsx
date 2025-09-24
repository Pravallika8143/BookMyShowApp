import { useFormik } from 'formik';
import React from 'react';

function ProducerSignup() {
    var producerForm = useFormik({
        initialValues:{
          username:"",
          password:"",
          mobile:"",
          role:"Movie Owner"
        }
    })
  return (
    <div>
        <h2 className='mb-4'>Producer Signup</h2>
        <form onSubmit={producerForm.handleSubmit}>
        <label className='mb-1 '>Username:</label><br/>
            <input type='text' {...producerForm.getFieldProps('username')} placeholder='Enter your name'/><br/><br/>
        <label className='mb-1 '>Password:</label><br/>
            <input type='text' {...producerForm.getFieldProps('password')} placeholder='Enter password'/><br/><br/>
        <label className='mb-1 '>Mobile Number:</label><br/>
            <input type='text' {...producerForm.getFieldProps('mobile')} placeholder='Mobile Number'/><br/><br/>
        <button className='ms-5'>Submit</button>
        </form>
    </div>
  )
}

export default ProducerSignup;