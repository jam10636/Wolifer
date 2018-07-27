import {combineReducers} from 'redux';
import onclickreducer from './onclick';
import LoginReducer from './login'
export default combineReducers({
  userReducer:onclickreducer,
  loginReducer:LoginReducer
})
