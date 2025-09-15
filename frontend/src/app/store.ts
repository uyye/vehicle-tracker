import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from '@/features/vehicle/vehicleSlice'
import authSlice from '@/features/auth/authSlice'
import userSlice from '@/features/user/userSlice'
import reportSlice from '@/features/report/reportSlice'

export const store = configureStore({
    reducer:{
        vehicle: vehicleSlice,
        auth: authSlice,
        user: userSlice,
        report: reportSlice
    }
})

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch