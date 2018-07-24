//this is for middleware for async task and things like that
import {applyMiddleware,createStore,combineReducers} from 'redux';
const reducer=(state=0,action)=>{
if(action.type=="INC")
{
  return state+1;
}
else if(action.type=="DEC")
{
  return state-1;
}
else if(action.type==="e")
{
  throw new Error("here");
}
else return state;
}
const logger=(store)=>(next)=>(action)=>{
  console.log("store cha",action)
  next(action);
}
const error=(store)=>(next)=>(action)=>{
  try{
    next(action);
  }
  catch(e){
  console.log("Ahhh",e);
  }
}

const middleware=applyMiddleware(logger,error);
const store=createStore(reducer,middleware);
store.subscribe(()=>
{
  console.log("store changed",store.getState());
}
);

store.dispatch({type:"INC",payload:1});
store.dispatch({type:"INC",payload:1});
store.dispatch({type:"INC",payload:1});
store.dispatch({type:"DEC",payload:1});
store.dispatch({type:"e",payload:1});
