import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import {getData} from '../Redux/action';
import {Link} from 'react-router-dom'
// import { store } from "../Redux/store";

export const Todos=()=>{
    const dispatch= useDispatch();
    const todos= useSelector(store=>store.myTodos.todos)
    console.log("Rendering todos")
    // console.log(todos)
    const [text, settext]=useState("");
    // const [todosList, setTodos]= useState([])
    const handlechange=(e)=>{
        settext(e.target.value);
    }

    const handleSubmit= ()=>{
        const payload={
            title:text,
            status:false
        };
        fetch("http://localhost:8080/todos", {
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            }
        }).then(()=>{
            dispatch(getData()); 
        });
        
    }

    useEffect(()=>{
        dispatch(getData());
    },[])

   

    return (
        <div>
            <input onChange={handlechange} type="text" placeholder="Enter Todo"></input>
            <button onClick={handleSubmit}>Submit</button>
            {todos.map((e, i)=>(
                <div  key={e.id}>
                <Link to={`/todos/${e.id}`} style={{color:"black", textDecoration:"none"}} >{i+1 + " - " +e.title}</Link>
                </div>
            ))}
        </div>
    )
} 