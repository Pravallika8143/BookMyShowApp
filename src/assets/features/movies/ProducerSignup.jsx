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
        <h1>Theatre-Signup</h1>
        <form onSubmit={producerForm.handleSubmit}>
            <input type='text' {...producerForm.getFieldProps('username')}/><br/>
            <input type='text' {...producerForm.getFieldProps('password')}/><br/>
            <input type='text' {...producerForm.getFieldProps('mobile')}/><br/>
            <button>SignUp</button>
        </form>
    </div>
  )
}

export default ProducerSignup;