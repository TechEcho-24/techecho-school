import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "./authApi";
import type { LoginCredentials, CompleteProfileCredentials, OTPData, ResetPasswordData } from "./authApi";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data: LoginCredentials, thunkAPI) => {
      try {
        const response = await authAPI.login(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for signup action
  export const completeProfile = createAsyncThunk(
    "/auth/completeProfile",
    async (data: CompleteProfileCredentials, thunkAPI) => {
      try {
        const response = await authAPI.completeProfile(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for logout
  export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
      try {
        const response = await authAPI.logout();
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for get OTP
  export const getOTP = createAsyncThunk(
    "auth/getOTP",
    async (data: string, thunkAPI) => {
      try {
        const response = await authAPI.getOTP(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for verify email
  export const verifyEmail = createAsyncThunk(
    "auth/verifyEmail",
    async (data: OTPData, thunkAPI) => {
      try {
        console.log(data);
        const response = await authAPI.verifyOTP(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for resend verification code
  export const resendVerificationCode = createAsyncThunk(
    "auth/resendVerificationCode",
    async (data: string, thunkAPI) => {
      try {
        console.log(data);
        const response = await authAPI.resendVerificationCode(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for forgot password mail
  export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (data: string, thunkAPI) => {
      try {
        const response = await authAPI.forgotPassword(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // thunk for reset password
  export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (data: ResetPasswordData, thunkAPI) => {
      try {
        const response = await authAPI.resetPassword(data);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  // get userDetails
  export const getAuthUser = createAsyncThunk(
    "auth/getAuthUser",
    async (_, thunkAPI) => {
      try {
        const response = await authAPI.getUser();
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );