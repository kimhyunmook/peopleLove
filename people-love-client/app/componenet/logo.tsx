"use client"

import { useRouter } from "next/navigation"

type PropsLogo = {
}
export default function Logo ({}:PropsLogo) {
    const router = useRouter()
    // let hart = ['💓','💘','💔'];
    const reset = (e:React.MouseEvent) =>{
        e.preventDefault()
        window.location.href='/'
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