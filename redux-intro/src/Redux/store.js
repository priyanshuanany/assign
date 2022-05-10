import {legacy_createStore as createStore} from 'redux';
import { ADD_COUNTER } from "./action"
import {reducer} from './reducer';

const initState={ counter:0, todos:[] }
export const store= createStore(reducer, initState);


store.dispatch({type:ADD_COUNTER, payload:1})

store.subscribe(()=>{
    console.log("Subscribe:", store.getState())
});