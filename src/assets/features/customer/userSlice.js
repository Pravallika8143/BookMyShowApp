import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails:{
    username:"",
    email:"",
    mobile:"",
    role:"",
  },
  ticketDetails:{
    moviename:"",
    theatre:"",
    timestamp:"",
    show:"",
    seats:[],
    transactionDetails:{
        tid:"",
        modeofPayment:""
    }
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
})

