import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
axios.defaults.baseURL = "https://connections-api.goit.global/";
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      iziToast.error({
        title: "Error",
        message:
          "Sorry, something went wrong during registration. Please check whether your email is valid or contact support",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (creds, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", creds);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: "Error",
      message:
        "Authorization error.Please make sure your login and password are correct.",
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    setAuthHeader("");
  } catch (error) {
    setAuthHeader("");
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const token = reduxState.auth.token;
    setAuthHeader(token);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
