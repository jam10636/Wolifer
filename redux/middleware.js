import {applyMiddleware,createStore} from 'redux';
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import axios from "axios";
const logger=createLogger({});
const initialstate=({
  fetched:false,
  fetching:false,
  data:[],
  error:null

})
const reducer=(state=initialstate,action)=>
{
  switch (action.type) {
    case "fetchstart":
    {
      return [...state,{fetched:true}]
      break;
    }
    case "fetchrecived":
    {
      state.fetched=true;
      break;
    }
    case "errorreceive":
    {
      state.error="yes";
    }
  }
  return state;
}
const middleware=applyMiddleware(ReduxThunk,logger);
const store=createStore(reducer,middleware);

store.dispatch((dispatch)=>{
  dispatch({type:"fetchstart"})
  axios.get("http://10.0.1.122:8080/find")
  .then((response)=>{
    dispatch({type:"fetchrecived",payload:response.data})
  })
  .catch(function (error) {
    dispatch({type:"errorreceive",payload:error})
  });
});
