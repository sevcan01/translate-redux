import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants/constanst";

export const getLanguages = createAsyncThunk("getLanguages", async()=>{
    const res = await axios.request(options)
   const data = res.data.data.languages

   const refData = data.map((item)=>({
    value: item.code,
    label: item.name,
   }))
   
    return refData;
})

export const translateText = createAsyncThunk('translate',
 async(params)=>{
    console.log(params)
    const encodedParams = new URLSearchParams();
encodedParams.set('source_language', params.sourceLang.value);
encodedParams.set('target_language', params.targetLang.value);
encodedParams.set('text', params.text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '8fed0248d0msh31ae57bb418e858p11bbfdjsn269b583558b7',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

const res = await axios.request(options)
return res.data.data.translatedText
})