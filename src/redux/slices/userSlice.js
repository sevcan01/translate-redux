import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userActions";

const initialState = {
    users:[],
    isLoading:true,
    isError:false,
}
const userSlice = createSlice({
    name:"users",
    initialState,
    extraReducers: {
        //HENUZ API DEN CEVAP GELMEDIYSE
        [getUsers.pending]: (state)=>{
            state.Loading=true
        },
        //API DEN OLUMLU CEVAP GELIRSE
        [getUsers.fulfilled]: (state,action)=>{
            state.isLoading=false
            state.users=action.payload
            state.isError=false

        },
         //API DEN OLUMSUZ CEVAP GELIRSE
         [getUsers.rejected]: (state)=>{
            state.isLoading=false
            state.isError=true
         }
    }
})



export default userSlice.reducer