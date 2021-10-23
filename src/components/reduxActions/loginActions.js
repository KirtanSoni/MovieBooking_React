import { ActionTypes } from "./ALLconstants";

export const loggedIn= (user) =>{
    return {
        type:ActionTypes.loginConstants.LOGGED_USER,
        payload:user
    }
} 
export const userlogout= () =>{
    return {
        type:ActionTypes.loginConstants.LOGOUT,
    }
}