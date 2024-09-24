
export default function Result ({text}:{text:string}) {
    return(
        <div className="result flex_center">
            <p className="resultText body2_sb">
                {text}
            </p>
        </div>
    )
}