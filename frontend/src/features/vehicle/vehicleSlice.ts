import instance from "@/api/axiosInstance";
import type { appDispatch, rootState } from "@/app/store";
import type { VehicleAttributes, vehicleState } from "@/types/vehicle";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: vehicleState = {
  vehicles: [],
  totalPages: 0,
  vehicle: null,
  page: 1,
  search: "",
  loading: true,
  error: null,
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehicles: (state, action:PayloadAction<{vehicles:VehicleAttributes[], totalPages:number}>) => {
      state.vehicles = action.payload.vehicles;
      state.totalPages = action.payload.totalPages;
    },
    setVehicle: (state, action:PayloadAction<VehicleAttributes>) => {
      state.vehicle = action.payload;
    },
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearch: (state, action:PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLoading: (state, action:PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action:PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setVehicles,
  setVehicle,
  setPage,
  setSearch,
  setLoading,
  setError,
} = vehicleSlice.actions;

export const fetchVehicles = () => {
  return async (dispatch: appDispatch, getState: () => rootState) => {
    const { page, search } = getState().vehicle;
    try {
      const { data } = await instance({
        method: "get",
        url: "/vehicles",
        params: {
          page,
          search,
        },
      });

      dispatch(
        setVehicles({ vehicles: data.data, totalPages: data.pagination.totalPages })
      );
    } catch (error:any) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const fetchDetailVehicle = (id:number, date?:string) => {
console.log('masuk fetching detail')
  return async (dispatch:appDispatch)=>{
    try {
      const {data} = await instance({
        method:'get',
        url:`/vehicles/${id}/status`,
        params:{date}
      })

      console.log(data, 'DETAIL');
      
      dispatch(setVehicle(data))
      
    } catch (error:any) {
      dispatch(setError(error))
    } finally{
      dispatch(setLoading(false))
    }
  }
}



export default vehicleSlice.reducer;
