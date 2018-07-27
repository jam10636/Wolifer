import {applyMiddleware,createStore,combineReducers} from 'redux';
const loginReducer=(state={login:false,userId:null},action)=>
{
  switch(action.type)
  {
    case "login":{
      return {...state,login:action.payload,userID:action.userID };
    }
    case "logout":
    {
      return {...state,login:action.payload};
    }
  }
  return state;
}
export default loginReducer;
