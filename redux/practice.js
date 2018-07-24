import {applyMiddleware,createStore,combineReducers} from 'redux';
const userReducer=(state={name:'',age:Number},action)=>
{
  switch(action.type)
  {
    case "Changed_User":{
      state.name=action.payload;
      break;
    }
    case "Changed_Age":
    {
      state.age=action.payload;
    }

  }
  return state;
}
const tweetReducer=(state=[],action)=>
{
  switch(action.type)
  {
    case "tweet":
    {
      state=action.payload;
      break;
    }
  }
  return state;
}
const reducers=combineReducers({
  user:userReducer,
  tweets:tweetReducer
})
const logger=(store,action)=>{
  console.log("action fired",action);
  action.type="Changed_User";
  next(action)
}
const store=createStore(reducers);
store.subscribe(()=>{
  console.log("store changed",store.getState())
});
store.dispatch({type:"Changed_User",payload:"will"});
store.dispatch({type:"Changed_Age",payload:35});
store.dispatch({type:"Changed_Age",payload:80});
store.dispatch({type:"tweet",payload:["yes","hello"]});
