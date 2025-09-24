import { useFormik } from 'formik';
import React from 'react';

function Login() {
    var producerForm = useFormik({
            initialValues:{
              username:"",
              password:"",
              mobile:"",
              role:"User Login"
            }
        })
      return (
        <div>
            <h1>Customer Login</h1>
            <form onSubmit={producerForm.handleSubmit}>
                <input type='text' {...producerForm.getFieldProps('username')}/><br/>
                <input type='text' {...producerForm.getFieldProps('password')}/><br/>
                <input type='text' {...producerForm.getFieldProps('mobile')}/><br/>
                <button>Submit</button>
            </form>
        </div>
      )
}

export default Login