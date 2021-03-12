import axios from 'axios';

class UserLoginService {
    
    async userLoggedInService(username, password){

if((username !==undefined && password !==undefined ) && (username !=="" && password !=="")){

  const response = await axios.post('http://localhost:4000/login', { username, password }, {withCredentials : true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}}); 
  return response.data; 
}
    }
  }
export default new UserLoginService();