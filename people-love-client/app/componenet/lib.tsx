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
  
  export function SaveBtn ({className,onClick}:{className?:string,onClick?:React.ReactEventHandler}) {
    return(
      <button className={`saveBtn button1_sb ${className}`} onClick={onClick}>
        저장
      </button>
    )
  }