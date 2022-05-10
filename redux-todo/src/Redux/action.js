export const ADD_TODOS= "ADD_TODOS"
export const DELETE_TODO="DELETE_TODO"
export const UPDATE_TODO="UPDATE_TODO"
export const addTodos= (data)=>{
    return {
        type: ADD_TODOS,
        payload:data
    }  
  }
  
export const getData= ()=> async(dispatch)=>{
    let res= await fetch("http://localhost:8080/todos");
    let todos= await res.json();
    dispatch(addTodos(todos))
}

export const updateTodo=(id)=>{
  return {
    type: UPDATE_TODO,
    payload:id
  }
}

export const deleteTodo = (id) => {
  return {
      type: DELETE_TODO,
      payload: id
  }
}