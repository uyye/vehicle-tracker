import instance from "@/api/axiosInstance";
import type { appDispatch } from "@/app/store";
import type { UserAttributes, userState } from "@/types/user";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState:userState = {
    user: {username:'',email:'',role:''},
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state, action:PayloadAction<Omit<UserAttributes, 'password'>>)=>{
            state.user = action.payload
        },
        setLoading:(state, action:PayloadAction<boolean>)=>{
            state.loading = action.payload
        },
        setError:(state, action:PayloadAction<null | string>)=>{
            state.error = action.payload
        }
    }
})

export const {setUser, setLoading, setError} = userSlice.actions;

export const fetcProfile = ()=>{
    return async (dispatch:appDispatch)=>{
        try {
            dispatch(setLoading(true))
            const {data} = await instance({
                method:'get',
                url:'/users/profile',
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            dispatch(setUser(data))
        } catch (error : any) {
            const errResponse = error.response.data.message
            dispatch(setError(errResponse))
        }finally{
            dispatch(setLoading(false))
        }
    }
}

export const fetchUpdateProfile = (id:number, username:string, email:string)=>{
    return async (dispatch:appDispatch)=>{
        try {
            dispatch(setLoading(true))
            await instance({
                method:'put',
                url:`/users/update/${id}`,
                data:{username, email},
                headers:{'Authorization':`Bearer ${localStorage.getItem('access_token')}`}
            })
            dispatch(fetcProfile())
        } catch (error :any) {
            const errResponse = error.response.data.message
            dispatch(setError(errResponse))
        }finally{
            dispatch(setLoading(false))
        }
    }
}

export const fetchDeleteUser = (id:number)=>{
    return async (dispatch:appDispatch)=>{
        try {
            dispatch(setLoading(true))
            await instance({
                method:'delete',
                url:`/users/delete/${id}`
            })
        } catch (error:any) {
            const errResponse = error.response.data.message
            dispatch(setError(errResponse))
        } finally{
            dispatch(setLoading(false))
        }
    }
}

export default userSlice.reducer;