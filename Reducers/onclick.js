import {applyMiddleware,createStore,combineReducers} from 'redux';
const userReducer=(state={clicked:false},action)=>
{
  switch(action.type)
  {
    case "onclick":{
      return {...state,clicked:action.payload};
    }
    case "offclick":
    {
      return {...state,clicked:action.payload};
    }
  }
  return state;
}
export default userReducer;
