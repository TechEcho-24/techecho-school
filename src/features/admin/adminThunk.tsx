import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminAPI } from "./adminApi";

// get all users
export const getUsers = createAsyncThunk(
    "admin/getUsers",
    async (_, thunkAPI : any) => {
      try {
        const response = await adminAPI.getUsers();
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // add track
  export const addTrack = createAsyncThunk(
    "admin/addTrack",
    async (data : any, thunkAPI : any) => {
      try {
        const response = await adminAPI.addTrack(data);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // delete specific user
  export const deleteUser = createAsyncThunk(
    "admin/deleteUser",
    async (id : string, thunkAPI : any) => {
      try {
        const response = await adminAPI.deleteUser(id);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // get all calls
  export const getCalls = createAsyncThunk(
    "admin/getCalls",
    async (_, thunkAPI : any) => {
      try {
        const response = await adminAPI.getCalls();
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // delete specific call
  export const deleteCall = createAsyncThunk(
    "admin/deleteCall",
    async (id : string, thunkAPI : any) => {
      try {
        const response = await adminAPI.deleteCall(id);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  //add course
  export const addCourse = createAsyncThunk(
    "admin/addCourse",
    async (data : any, thunkAPI : any       ) => {
      console.log(data);
      try {
        const response = await adminAPI.addCourse(data);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // delete specific course from backend
  export const deleteCourses = createAsyncThunk(
    "admin/deleteCourses",
    async (id : string, thunkAPI : any) => {
      try {
        const response = await adminAPI.deleteCourses(id);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // create manual payment
  export const createManualPayment = createAsyncThunk(
    "admin/createManualPayment",
    async (data : any, thunkAPI : any) => {
      try {
        const response = await adminAPI.createManualPayment(data);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // get help calls
  export const getHelpCalls = createAsyncThunk(
    "admin/getHelpCalls",
    async (_, thunkAPI : any) => {
      try {
        const response = await adminAPI.getHelpCalls();
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // update help calls
  export const updateHelpCall = createAsyncThunk(
    "admin/updateHelpCall",
    async (id : string, thunkAPI : any) => {
      console.log("called");
      try {
        const response = await adminAPI.updateHelpCall(id);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // delete Help Call
  export const deleteHelpCall = createAsyncThunk(
    "admin/deleteHelpCall",
    async (id : string, thunkAPI : any) => {
      try {
        const response = await adminAPI.deleteHelpCall(id);
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // get tracks
  export const getTracks = createAsyncThunk(
    "admin/getTracks",
    async (_, thunkAPI : any) => {
      try {
        const response = await adminAPI.getTracks();
        return response.data;
      } catch (error : any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );