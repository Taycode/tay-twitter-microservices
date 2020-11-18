import {apiCall, setTokenHeader} from "../../services/api";
import {SET_CURRENT_USER} from "../actionTypes";
import {addError, removeError} from "./errors";


export function setCurrentUser(user) {
    return{
        type:SET_CURRENT_USER,
        user
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token);
}

export function logout() {
    return dispatch=> {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject)=> {

            let url;
            if (type === 'signup'){
                url = 'http://localhost:8000/auth/registration/'
            }
            else {
                url = ':django_api/auth/login'
            }

            return apiCall("post", url, userData).then(({token, ...user})=>{
                console.log(token)
                // console.log(token)
                // localStorage.setItem("jwtToken",token);
                // console.log(user);
                // setAuthorizationToken(token);
                // dispatch(setCurrentUser(user));
                // dispatch(removeError());
                // resolve();
            }).catch(err=> {
                console.log(err)
                dispatch(addError(err.message));
                reject();
            })
        })
    }
}
