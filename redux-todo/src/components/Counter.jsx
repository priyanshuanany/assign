import {addCounter} from '../Redux/action'
import {useSelector,useDispatch} from 'react-redux'
export const Counter= ()=>{
    // console.log(store.getState().counter)
  const dispatch= useDispatch();
  const counter= useSelector((store)=>store.counter)
  console.log("Rendering Counter")
    return (
        <div>
        <h1>COUNTER: {counter}</h1>
        <button onClick={()=>{
          dispatch(addCounter(1))
        }}>Add1</button>  
        </div>
    )
}