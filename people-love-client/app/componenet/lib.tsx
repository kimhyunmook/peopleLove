export function InputBox ({id,label}:{id:string,label:string}) {
    return (
      <div className="inputBox">
        <label htmlFor={`${id}`}>
          {label}
        </label>
        <input id={id} type="text" />
      </div>
    )
  }
  interface PropsBtn {
    className?:string,
    onClick:React.ReactEventHandler,
    resetClick:React.ReactEventHandler
  }
  
  export function SaveBtn ({className,onClick,resetClick}:PropsBtn) {
    return(
      <div className={`btnArea ${className}`}>
        <button className={`saveBtn button1_sb `} onClick={onClick}>
          확인
        </button>
        <button type="reset" className="resetBtn button1_sb" onClick={resetClick}>
          리셋
        </button>
      </div>
    )
  }