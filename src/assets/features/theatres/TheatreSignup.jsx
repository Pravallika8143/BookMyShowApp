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
    
  )
}

export default TheatreSignup;