import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8081/users"

class UserService{
    
    login(uname, pass){
        return axios.get(USER_API_BASE_URL + '/login?username='+ uname + '&password='+ pass);
    }
}

export default UserService;