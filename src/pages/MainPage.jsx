import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, translateText} from "../redux/actions/translateAction";
import Select from 'react-select'
import { clearAnswer } from "../redux/slices/translateSlice";
const MainPage = () => {
    const state = useSelector((store)=> store.translateSlice)
    const dispatch = useDispatch()
    const [text,setText]=useState("")
    const [sourceLang,setSourceLang]=useState({
        value:'sv',
        label:'Swedish'
       
    })
    const [targetLang,setTargetLang]=useState({
        value:'en',
        label:'English'
    })

    useEffect(()=>{
        dispatch(getLanguages())
    },[])

    const handleChange = ()=>{
        setTargetLang(sourceLang)
        setSourceLang(targetLang)
        setText('');
        dispatch(clearAnswer())
    }

  return (
    <div className="main-page">
      <div className="container">
        <h1> Translate +</h1>
        <div className="translate-area">
          <div className="left">
           <Select value={sourceLang} onChange={(e)=>setSourceLang(e)} isDisabled={state.isLoading} isLoading={state.isLoading} options={state.languages} className="select"/>
            <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
          </div>

          <button onClick={handleChange} className="change-btn">Change</button>

          <div className="right">
          <Select value={targetLang} onChange={(e)=>setTargetLang(e)} isDisabled={state.isLoading} isLoading={state.isLoading} options={state.languages} className="select"/>
            <textarea disabled value={state.answer}></textarea>
          </div>
        </div>
        <button onClick={()=> dispatch(translateText({sourceLang,targetLang,text}))} className="submit-btn">Translate</button>
      </div>
    </div>
  );
};

export default MainPage;
