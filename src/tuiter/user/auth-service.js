import axios from "axios"
//const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL; // get the URL to the remote API URL to auth controller
const SERVER_API_URL = "https://tuiter-node-server-app-a6-stzb.onrender.com/api";
const USERS_URL = `${SERVER_API_URL}/users`;
const BASE_API = '${SERVER_API_URL}/api';
// configure axios to support cookies for passing credentials
const api = axios.create({withCredentials:true});

export const login = async ({username,password}) => {
    // implement login service function
    const response = await  api.post(`${USERS_URL}/login`,{username,password});
    const user =response.data;
    return user;
}
export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    try{
        const response = await api.post(`${USERS_URL}/profile`);
        return response;  // response
    }catch (e){
        alert(e);
    }

};
export const updateUser = async (user) => {
    //const response = await api.put(`${USERS_URL}`, user);
    const response = await api.put(`${USER_API}/${id}`, user);
    return response.data;
};
export const register = async ({ username, password }) => {
    const response = await  api.post(`${USERS_URL}/register`,{username,password});
    const user =response.data;
    return user;
}