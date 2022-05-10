import { useState } from "react";
import "./todoitem.css"

function Todoitems({todoitem}){
   const [count, setCount]= useState(1)

   function handlecount(value){
       setCount(count+value);
   }
    return(
        <div className="container">
            <h3>{todoitem}</h3>
            <div className={count%2===0?"green":"red"} onClick={()=>handlecount(1)}></div>    
        </div>
    )
}

export default Todoitems