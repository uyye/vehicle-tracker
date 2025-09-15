import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "@/api/axiosInstance";

export const fetchReport = createAsyncThunk(
  "report/fetchReport",
  async ({ vehicleId, date }: { vehicleId: number; date: string }) => {
    const res = await instance.get("/reports", {
      params: { vehicleId, date },
      responseType: "blob", 
    });

    const blob = res.data;
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report-${vehicleId}-${date}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);

    return true;
  }
);

const reportSlice = createSlice({
  name: "report",
  initialState: {
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReport.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Download gagal";
      });
  },
});

export default reportSlice.reducer;
