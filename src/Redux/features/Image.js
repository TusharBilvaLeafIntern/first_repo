import { createSlice } from "@reduxjs/toolkit";
import { addImages, getImages } from "../services/Image";

const initialState = {
  isLoading: false,
  token: localStorage.getItem('token'),
  error: "",
  errorMsg: "",
  images: [],
};

const imageSlice = createSlice({
  name: "imageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addImages.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addImages.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action?.payload?.data || [];
      })
      .addCase(getImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to fetch images";
      });
  },
});

export default imageSlice.reducer;
