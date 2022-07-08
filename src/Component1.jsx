import react, { useState } from "react";

const Component1 = () => {
  const [name, setName] = useState('Akshay')

  return (
    <div>
      <h1>USE STATE DEMO</h1>
      <div>Hello {name}</div>
      <input onChange={ (e) => setName(e.target.value) }type="text" value={name}></input>
    </div>
  )
}

export default Component1;