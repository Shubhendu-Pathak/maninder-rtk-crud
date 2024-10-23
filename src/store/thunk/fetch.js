

// get method

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showuser = createAsyncThunk(
    'showuser',async(args,{rejectWithValue})=>{
    let req =  await axios
        .get(`http://localhost:4000/users`)
        .then((val)=>{
            // console.log(val)
            return val.data
        })
        .catch((error)=> rejectWithValue(error))
      
        return req
    }
)

//delete

export const deleteuser = createAsyncThunk(
    'deleteuser',async(data,{rejectWithValue})=>{
        let req =  await axios
       .delete(`http://localhost:4000/users/${data.id}`)
       .then((val)=>{
            // console.log(val)
            return val.data
        })
        .catch((error)=> rejectWithValue(error))

        return req
    }
)

//update

export const updateuser = createAsyncThunk(
    'updateuser',async(data,{rejectWithValue})=>{
        let req =  await axios
        .patch(`http://localhost:4000/users/${data.id}`,data)
        .then((val)=>{
            // console.log(val)
            return val.data
        })
        .catch((error)=> rejectWithValue(error))

        return req
    }
)

//post 

export const postuser = createAsyncThunk(
    'postuser',async(data,{rejectWithValue})=>{
let req = await axios
.post(`http://localhost:4000/users`,data)
.then((val)=>{
    // console.log(val)
    return val.data
})
.catch((error)=> rejectWithValue(error))

return req
    }
)