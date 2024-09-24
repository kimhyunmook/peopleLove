"use client"
import {InputBox, SaveBtn} from './lib' 
export default function InsertBox () {
    
    return (
        <>
            <h3 className='description title_sb'>
                상대방의 대화를 통해 호감도을 알 수 있어요! <br/>
                ex : 카카오톡, 디스코드
            </h3>
            {/* <div className="privacyBox flex_center">
                <div className="content flex_center">
                    <h2>상대와 나의 이름을 입력해주세요.</h2>
                    <InputBox id="myName" label="내 이름" />
                    <InputBox id="partnerName" label="상대 이름" />
                    <SaveBtn  />
                </div>
            </div> */}
        </>
    )
}