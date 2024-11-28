"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

type PropsLogo = {
}
export default function Logo ({}:PropsLogo) {
    const router = useRouter()
    let hart = ['💓','💘','💔'];
    const [random,setRandom]=useState(Math.floor(Math.random()*hart.length))
    useEffect(()=>{})
    console.log(random)
    const reset = (e:React.MouseEvent) =>{
        e.preventDefault()
        router.push('/')
    }

    return(
        <a href="/" className="logo headline_sb" onClick={reset}>
            <p>
            💓
            </p>
            <p className="headline_sb">호감도 분석기</p>
        </a>
    )
}