import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';

import {reducer} from './reducer';



const rootReducer=combineReducers({
    myTodos:reducer
});


const middleware=(store)=>(next)=>(action)=>{
    if(typeof action==="function"){
        return action(store.dispatch);
    }
    next(action);
}
export const store= createStore(
    rootReducer, 
    applyMiddleware(middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// store.dispatch({type:ADD_COUNTER, payload:1})

store.subscribe(()=>{
    console.log("Subscribe:", store.getState())
});