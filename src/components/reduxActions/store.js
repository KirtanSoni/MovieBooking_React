import { createStore } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducers = combineReducers({
   user:userReducer,
})
const store=createStore(rootReducers,{},window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())


export default store;