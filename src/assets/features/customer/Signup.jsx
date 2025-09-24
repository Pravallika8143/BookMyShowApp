import { useFormik } from 'formik'
import React from 'react'

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
       <div>
           <h1>Customer Signup</h1>
           <form onSubmit={signupForm.handleSubmit}>
               <input type='text' {...signupForm.getFieldProps('username')}/><br/>
               <input type='text' {...signupForm.getFieldProps('password')}/><br/>
               <input type='text' {...signupForm.getFieldProps('mobile')}/><br/>
               <button>Submit</button>
           </form>
       </div>
     )
}

export default Signup