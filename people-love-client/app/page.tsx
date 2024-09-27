"use client"
import React, { useEffect, useRef, useState } from "react";
import InsertBox from "./componenet/insert";
import { SaveBtn } from "./componenet/lib";
import Logo from "./componenet/logo";
import Loading from "./loading/page";
import OptionBar from "./componenet/optionBar";

export default function Home() {
  const [chat,setChat] = useState("");
  const [emp,setEmp] = useState("emp");
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState("");
  const [el,setEl] =useState(<InsertBox/>);
  const textArea = useRef<HTMLTextAreaElement>(null);
  useEffect(()=>{
    if (!!result) setEl(        
    <div className="result flex_center">
      <p className="resultText body2_sb">
        { result }
      </p>
    </div>)
  },[result])
  async function clickHandle (e:React.MouseEvent<HTMLButtonElement>) {
    // 요기해야됑..
    if (e.currentTarget.parentNode && e.currentTarget.parentNode.classList) {}
    // console.log(e..parentNode)
    if (!!!chat) {
      alert('채팅 내역을 입력해주세요');
      return
    } 
    if (chat.length < 30) {
      alert('채팅 내역이 너무 짧습니다.');
      return
    }
    setLoading(true);
    setResult("");

    const url:string = !!process.env.NEXT_PUBLIC_EC2_URL ? `${process.env.NEXT_PUBLIC_EC2_URL}/judge` : "http://localhost:3000/judge" ;
      if (!chat.length) return;
      const accessToken = localStorage.getItem('act');
      const res: Response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization:` Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ text: chat }),
      });
      if (res.ok) {
        if (!!!res.body) return; 
        const reader = res.body.getReader();
        const processStream = async () => {
          setLoading(false)

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const decoder = new TextDecoder('utf-8');
            let chunk = decoder.decode(value, { stream: true });
            chunk = chunk.replace(/\n\n/g, '');
            setResult((text) => {
              const updatedResult = text + chunk;
              return updatedResult;
            });
          }
        };
    
        processStream().catch((err) => console.log('--stream error--', err));
      } 
  }
  function restHandle (e:React.MouseEvent) {
    e.preventDefault();
    if(!!textArea.current) {
      textArea.current.value ="";
      setChat("");
      setEmp('emp')
    }
  }
  
  function changeHandle (e:React.ChangeEvent<HTMLTextAreaElement>) {
    const t = e.currentTarget.value;
    setChat(t);
    if (!!t) setEmp('')
    else setEmp('emp')
  }

  const textareaAtt = {
    name:'chat',
    id:'chat',
    className:'body2_m',
    placeHolder:'채팅 내역을 입력해주세요.',
    defaultValue:chat,
    onChange:changeHandle
  }
  const saveBtnAtt = {
    className:emp,
    onClick:clickHandle,
    resetClick:restHandle
  }

  return (
    <main className="">
      <Logo />
      <div className="container flex_center">
        <OptionBar></OptionBar>
        <div className="content flex_center">
          {
            loading ?
            <Loading /> :
            <>
              { el }
              <div className="chatBox">
                    <textarea ref={textArea} {...textareaAtt}></textarea>
                    <SaveBtn {...saveBtnAtt}/>
              </div>
            </>
          }
        </div>
      </div>
    </main>
  );
}

