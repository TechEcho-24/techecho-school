import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../utils";
import { addCourse, addTrack, createManualPayment, deleteCall, deleteCourses, deleteHelpCall, deleteUser, getCalls, getHelpCalls, getTracks, getUsers, updateHelpCall } from "./adminThunk";
import { adminAPI } from "./adminApi";
export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (data : any, thunkAPI : any) => {
    try {
      const response = await adminAPI.login(data);
      return response.data;
    } catch (error : any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



// admin slice
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: getItem("admin") || null,
    authenticated: getItem("adminAuth") || false,
    error: null,
    loading: false,
    users: [],
    calls: [],
    helpCalls: [],
    tracks: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const cases = [
      getUsers,
      deleteUser,
      getCalls,
      deleteCall,
      addCourse,
      deleteCourses,
      createManualPayment,
      getHelpCalls,
      updateHelpCall,
      deleteHelpCall,
      getTracks,
      addTrack,
    ];

    cases.forEach((c) => {
      builder
        .addCase(c.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(c.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          if (c === getUsers) {
            state.users = action.payload.users;
          } else if (c === getCalls) {
            state.calls = action.payload.calls;
          } else if (c === getHelpCalls || c === updateHelpCall) {
            console.log(action.payload);
            state.helpCalls = action.payload.calls;
          } else if (c === getTracks) {
            state.tracks = action.payload;
          }
        })
        .addCase(c.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as any;
        });
    });

    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.user;
        state.authenticated = true;
        setItem("adminAuth", true);
        setItem("admin", action.payload.user);
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});

export default adminSlice.reducer;
