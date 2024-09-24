"use client"
import React, { useEffect, useState } from "react";
import InsertBox from "./componenet/insert";
import { SaveBtn } from "./componenet/lib";
import Loading from "./loading/page";

export default function Home() {
  const [chat,setChat] = useState("");
  const [emp,setEmp] = useState("emp");
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState("");
  const [el,setEl] =useState(<InsertBox/>);
  console.log('??????')
  useEffect(()=>{
    if (!!result) setEl(        
    <div className="result flex_center">
      <p className="resultText body2_sb">
        { result }
      </p>
    </div>)
  },[result])
  async function clickHandle () {
    if (!!!chat) {
      alert('채팅 내역을 입력해주세요');
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
            // .read() returns 2 properties
            const { done, value } = await reader.read();
            // if done is true
            if (done) break;
            
            const decoder = new TextDecoder('utf-8');
            // TextDecoder를 사용하여 한 번에 디코드합니다.
            let chunk = decoder.decode(value, { stream: true });
            //줄바꿈2개일떈 1개로 변형
            chunk = chunk.replace(/\n\n/g, '');
            // append to the response
            setResult((text) => {
              const updatedResult = text + chunk;
              return updatedResult;
            });
          }
        };
    
        // setTalkPossibleCount(talkPossibleCount - 1);
        processStream().catch((err) => console.log('--stream error--', err));
      } else {
        // setIsChatStream(false);
      }





  }
  
  function changeHandle (e:React.ChangeEvent<HTMLTextAreaElement>) {
    const t = e.currentTarget.value;
    setChat(t);
    if (!!t) setEmp('')
    else setEmp('emp')
  }

  return (
    <main className="flex_center">
      <div className="container flex_center">
        {
          loading ?
          <Loading /> :
          <>
            { el }
            <div className="chatBox">
                  <textarea name="chat" id="chat" className="body2_m" placeholder="채팅 내역을 입력해주세요." defaultValue={chat} onChange={changeHandle}></textarea>
                  <SaveBtn onClick={clickHandle} className={emp}/>
            </div>
          </>
        }
      </div>
    </main>
  );
}

