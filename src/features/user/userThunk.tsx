import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "./userApi";

// Example
export const getBlogs = createAsyncThunk(
  "user/fetchBlogs",
  async (_, thunkAPI: any) => {
    try {
      const response = await userAPI.getBlogs();
      return response.data; // ✅ Make sure you return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching blogs"
      );
    }
  }
);

export const getBlog = createAsyncThunk(
  "user/getBlog",
  async (data: any, thunkAPI: any) => {
    try {
      console.log("Fetching blog with ID:", data); // Log the ID being fetched
      const response = await userAPI.getBlog(data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (data: any, thunkAPI: any) => {
    try {
      console.log(data);
      const response = await userAPI.getUser(data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCourses = createAsyncThunk(
  "user/getCourses",
  async (_, thunkAPI) => {
    try {
      const response = await userAPI.getCourses();
      console.log("Response:", response); // Check if this is logged
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getImage = createAsyncThunk(
  "user/getImage",
  async (_, thunkAPI: any) => {
    try {
      const response = await userAPI.getImage();
      const imageURL = URL.createObjectURL(response.data);
      return imageURL;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "user/uploadImage",
  async (data: any, thunkAPI: any) => {
    try {
      const response = await userAPI.uploadImage(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const requestCall = createAsyncThunk(
  "user/requestCall",
  async (data: any, thunkAPI: any) => {
    try {
      const response = await userAPI.requestCall(data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const scheduleForm = createAsyncThunk(
  "user/scheduleForm",
  async (data: any, thunkAPI: any) => {
    try {
      const response = await userAPI.scheduleForm(data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCourse = createAsyncThunk(
  "user/getCourse",
  async (courseId: any, thunkAPI: any) => {
    try {
      const response = await userAPI.getCourse(courseId);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
