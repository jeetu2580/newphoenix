import { 
    USER_LOGGED_IN_SUCCESS,
    USER_LOGGED_IN_FAILED 
} from './actionTypes'
import UserLoginService from '../services/UserLoginService'
 

export const userLoggedInAction = (email, password) => async (dispatch)=>{
  
try
{
 const userLoggedInStatus = await UserLoginService.userLoggedInService(email, password);
    if(userLoggedInStatus.userinfo.status[0].isLoggedIn === true){
        localStorage.setItem("token",  JSON.stringify(userLoggedInStatus.userinfo.token));
        dispatch({
        type: USER_LOGGED_IN_SUCCESS,
        payload: {
            userdata: userLoggedInStatus.userinfo,
        }
      });
    }
    else 
    {
    dispatch({
        type: USER_LOGGED_IN_FAILED,
        payload: {
        }
        })
    }
}
catch(error){
    
}
}