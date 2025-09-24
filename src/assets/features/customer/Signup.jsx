import { useFormik } from 'formik';
import React from 'react';

function Signup() {
   var signupForm = useFormik({
           initialValues:{
             username:"",
             password:"",
             mobile:"",
             role:"User SignUp"
           }
       })
     return (
       <div style={{ maxWidth: 350,margin: "2rem auto", padding:24, border:"1px solid #9b9898ff",borderRadius: 8}}>
           <h2 className='mb-4'>User Signup</h2>
           <form onSubmit={signupForm.handleSubmit}>
            <label className='mb-1 '>Username:</label><br/>
               <input type='text' {...signupForm.getFieldProps('username')} placeholder='Enter your name'/><br/><br/>
            <label className='mb-1 '>Password:</label><br/>
               <input type='text' {...signupForm.getFieldProps('password')} placeholder='Enter password'/><br/><br/>
            <label className='mb-1 '>Mobile Number:</label><br/>
               <input type='text' {...signupForm.getFieldProps('mobile')} placeholder='Mobile Number'/><br/><br/>
               <button className='btn btn-primary ms-5'>Submit</button>
           </form>
       </div>
     )
}

export default Signup