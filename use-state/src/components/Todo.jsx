import { useState } from "react";
import Todoinput from "./TodoInput";
import Todoitems from "./TodoItem"

function Todo(){
const [todoArr, setTodo]= useState(["Self Study", "Study "]);
const getData= (text)=>{
    setTodo([...todoArr, text]);
}

return(
    <div>
        <Todoinput getData={getData}/>
        {todoArr.map((e)=>(
            <Todoitems todoitem={e}/>
        ))}
        
    </div>
)
}
export default Todo;