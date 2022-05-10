import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/action";
export const TodoItem=()=>{
    const {id}= useParams();
    const todo = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData]= useState({});
    console.log(id)
    useEffect(()=>{
        getData();
    },[])

    const getData= async()=>{
        let res= await fetch(`http://localhost:8080/todos/${id}`);
        let data= await res.json();
        setData(data)
    }


    const handleStatus=()=>{
        setData({
            ...data, status:!data.status
        })
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "PATCH",
        });  
    }

    const removeData=()=>{
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "DELETE",
        });

        dispatch(deleteTodo(data.id));
        navigate("/")
    }

    return (
        <div>
            <h2>TODO: {data.title+" - "+data.status}</h2>
            <button onClick={handleStatus}>{data.status===false?"Mark Complete":"Mark Todo"}</button>
            <button onClick={removeData} >Delete Todo</button>
        </div>
    )
}