import { createSlice } from "@reduxjs/toolkit";
import { deleteuser, postuser, showuser, updateuser } from "./thunk/fetch";


let userSlicedata = createSlice({
    name: 'users',
 initialState:{
    isloading: false, data: null, error : null, searchdata:''
 }, 
 reducers:{
    logout(state, action){
        state.data = null
    },
searchtxt(state, action){
    state.searchdata =  action.payload
}
 },
 extraReducers(builder){
    // get
builder.addCase(showuser.pending,(state, action)=>{
state.isloading = true
}),
builder.addCase(showuser.fulfilled,(state, action)=>{
    state.data = action.payload
    state.isloading = false
    state.error = null
}),
builder.addCase(showuser.rejected,(state, action)=>{
    state.isloading = false
    state.data = null
    state.error = action.payload
})
      // get
    //   delete
    builder.addCase(deleteuser.pending,(state, action)=>{
        state.isloading = true
        }),
    builder.addCase(deleteuser.fulfilled,(state, action)=>{
            state.isloading = false
            state.error = null
            console.log(action.payload);
            
            let {id} = action.payload
            if(id){
                state.data = state.data.filter((item) => item.id != id)
            }
        }),
    builder.addCase(deleteuser.rejected,(state, action)=>{
            state.isloading = false
            state.data = null
            state.error = action.payload
        })
    // delete
    // update
    builder.addCase(updateuser.pending,(state, action)=>{
        state.isloading = true
        }),
    builder.addCase(updateuser.fulfilled,(state, action)=>{
            state.isloading = false
            state.error = null
            console.log(action.payload);
        state.data = state.data.map(ele=>{
            return ele.id == action.payload.id ? action.payload : ele
        })
        }),
    builder.addCase(updateuser.rejected,(state, action)=>{
            state.isloading = false
            state.data = null
            state.error = action.payload
        })
// update
//post 
builder.addCase(postuser.pending,(state, action)=>{
    state.isloading = true
    }),
    builder.addCase(postuser.fulfilled,(state, action)=>{
        state.data.push(action.payload)
        state.isloading = false
        state.error = null
    }),
    builder.addCase(postuser.rejected,(state, action)=>{
        state.isloading = false
        state.data = null
        state.error = action.payload
    })
// post
 }
})

export const {logout, searchtxt} = userSlicedata.actions
export const userdata = userSlicedata.reducer