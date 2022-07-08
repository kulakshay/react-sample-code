import react, { useState, useRef } from "react";

const UseRefDemo = () => {
  const [name, setName] = useState('Akshay')

  const inputRef = useRef(null)
  return (
    <div>
      <h1>USE REF DEMO</h1>
      <input ref={inputRef}  type="text" value={name}></input>
      <button onClick={ () => inputRef.current.focus()}>Click</button>
    </div>
  )
}

export default UseRefDemo;