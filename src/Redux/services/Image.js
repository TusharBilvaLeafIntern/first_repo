import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTPURL } from "../../Constant/Matcher";

// add images
export const addImages = createAsyncThunk(
  "upload-image",
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.token;
    try {
      let config = {
        method: "Post",
        url: `${HTTPURL}upload-image`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      };
      const res = await axios.request(config);
      if (res?.status == true) {
        console.log(res?.message, "success");
      } else {
        console.log(res?.message);
      }
      return res.data;
    } catch (error) {
      console.log(
        error?.response?.data ? error?.response?.data?.message : error?.message
      );
    }
  }
);

//get images
export const getImages = createAsyncThunk(
  "get-images",
  async (SearchData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.token;
    const refreshToken = localStorage.getItem("refreshToken");
    try {
      let config = {
        method: "get",
        url: `${HTTPURL}get-images`,
      };
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.log(
        error?.response?.data ? error?.response?.data?.message : error?.message
      );
    }
  }
);

// update image
export const editImage = createAsyncThunk(
  "update-image",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.token;
    try {
      let config = {
        method: "post",
        url: `${HTTPURL}update-image`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.log(
        error?.response?.data ? error?.response?.data?.message : error?.message
      );
    }
  }
);
