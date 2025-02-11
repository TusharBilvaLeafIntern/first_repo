import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./features/Image"

const store = configureStore({
  reducer: {
    image: imageReducer
  }
})

export default store