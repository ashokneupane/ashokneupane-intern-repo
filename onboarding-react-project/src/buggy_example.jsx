import { useState } from "react";

export default function Parent (){
  const [state,setState] = useState({count:0});
  return <>
  <div className="flex flex-col md:flex-row gap-8 p-4">
  <div className="bg-white p-4 border rounded w-full">
    <p>count: {state.count}</p>
    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded hover:bg-blue-600 active:bg-blue-700" onClick={()=>
        setState( c=>{return {count:c.count+1}} ) 
      }>Increment</button>
    <Child state={state}/>
  </div></div></>
}

function Child({state}){
   const stateClone = {...state}
   stateClone.count= stateClone.count+5;
  return <div><p>count + 5 = {stateClone.count} </p></div>
}