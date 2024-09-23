"use client"
import React, { useEffect, useState, useContext } from "react";
import InsertBox from "./componenet/insert";
import axios from "axios";
import { SaveBtn } from "./componenet/lib";
import Result from "./result/page";
import Loading from "./loading/page";

export default function Home() {
  const [chat,setChat] = useState("");
  const [emp,setEmp] = useState("emp");
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState("");
  const [el,setEl] =useState(<InsertBox/>);
 
  async function clickHandle () {
    setLoading(true);
    setResult("");
    let body = {
        text:chat
    }
    await axios.post(`http://localhost:5000/judge`,body)
    .then(async (res)=>{
        await setResult(res.data.content)
        await setEl(<Result text={res.data.content}/>)
        await setLoading(false)
    })
  }
  
  function changeHandle (e:React.ChangeEvent<HTMLTextAreaElement>) {
    const t = e.currentTarget.value;
    setChat(t);
    if (!!t) setEmp('')
    else setEmp('emp')
  }

  return (
    <div className="container flex_center">
      {
        loading ?
        <Loading /> :
        <>
          { el }
          <div className="chatBox">
                <textarea name="chat" id="chat" placeholder="채팅 내역을 입력해주세요." defaultValue={chat} onChange={changeHandle}></textarea>
                <SaveBtn onClick={clickHandle} className={emp}/>
          </div>
        </>
      }
    </div>
  );
}

