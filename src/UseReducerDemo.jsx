import react, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return {...state, name: action.value,}
      break;
  
    default:
      return state;
  }
}
const UseReducerDemo = () => {
  // const [name, setName] = useState('Akshay')

  const [state, dispatch] = useReducer(reducer, {name: 'Akshay'});
  return (
    <div>
      <h1>USE REDUCER DEMO</h1>
      <div>Hello {state.name}</div>
      <input onChange={ (e) => dispatch({type: 'setName', value: e.target.value})}type="text" value={state.name}></input>
    </div>
  )
}

export default UseReducerDemo;