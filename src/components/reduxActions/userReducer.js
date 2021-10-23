import { ActionTypes } from "./ALLconstants";

const intialstate={}
export const userReducer =( state=intialstate ,action) =>{
    switch(action.type){
        case ActionTypes.loginConstants.LOGGED_USER:
           return action.payload
        case ActionTypes.loginConstants.LOGOUT:
           return {}
        default:
            return state
    }
}