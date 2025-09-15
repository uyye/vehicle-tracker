import type { appDispatch } from "@/app/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import instance from "@/api/axiosInstance";
import type { authState } from "@/types/auth";


const initialState :authState = {
    token:null,
    error:null,
    loading:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setToken:(state, action:PayloadAction<string | null>)=>{
            state.token = action.payload
            localStorage.setItem('access_token', action.payload as string)
        },
        setError:(state, action:PayloadAction<string | null>)=>{
            state.error = action.payload
        },
        setLoading:(state, action:PayloadAction<boolean>)=>{
            state.loading = action.payload
        }
    }
})

export const {setToken, setError, setLoading} = authSlice.actions;

export const fetchLogin = (email:string, password:string)=>{
    return async (dispatch:appDispatch)=>{
        try {
            dispatch(setLoading(true))
            const {data} = await instance({
                method:'post',
                url:'/auth/login',
                data:{email, password}
            })
            dispatch(setToken(data.token));
        } catch (error : any) {
            const errResponse = error.response.data.message 
            dispatch(setError(errResponse))
        }finally{
            dispatch(setLoading(false))
        }
    }
}

export const fetchRegister = (username:string, email:string, password:string)=>{
    return async (dispatch:appDispatch)=>{
        try {
            dispatch(setLoading(true))
             await instance({
                method:'post',
                url:'/auth/register',
                data:{username, email, password}
            })
        } catch (error:any) {
            const errResponse = error.response.data.errors 
            dispatch(setError(errResponse))
        }finally{
            dispatch(setLoading(false))
        }
    }
}

export default authSlice.reducer;