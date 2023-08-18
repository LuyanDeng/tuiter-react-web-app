import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login",async (credentials) => {
        //Send credentials to the authentication controller using the login service
        const  user = await authService.login(credentials);
        return user;
    }
)
export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        const response = await authService.profile();
        console.log('response profile thunk')
        console.log(response.data)
        return response.data;
    });
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    });
export const registerThunk = createAsyncThunk(
    "auth/register",async ({username,password}) =>{
        const currentUser = await authService.register({username,password});
        return currentUser;

    }
)