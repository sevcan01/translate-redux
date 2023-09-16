import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translateText } from "../actions/translateAction";

const initialState = {
    isLoading: true,
    isError: false,
    languages:[],
    isAnswerLoading:false,
    isAnswerError:false,
    answer:""
}
const tarnslateSlice = createSlice({
    name: "translate",
    initialState:{},
    extraReducers:{
        [getLanguages.pending]: (state)=>{
            state.isLoading = true;
        },
        [getLanguages.fulfilled]: (state,action)=>{
            state.languages = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        [getLanguages.rejected]: (state)=>{
            state.isLoading = false;
            state.isError = true;
        },
        [translateText.pending]: (state)=>{
            state.isAnswerLoading=true;
        },
        [translateText.fulfilled]: (state,action)=>{
            state.isAnswerLoading=false;
            console.log(action);
            state.answer=action.payload;
        },
        [translateText.rejected]: (state)=>{
            state.isAnswerLoading=false;
            state.isAnswerError=true;
        }
    },
    reducers:{
        clearAnswer:(state)=>{
            state.answer="";
        }
    }
})
export default tarnslateSlice.reducer;

export const clearAnswer = tarnslateSlice.actions.clearAnswer