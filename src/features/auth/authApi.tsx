// import axios from "axios";

// axios.defaults.withCredentials = true;

// // Types for API parameters
// export interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export interface CompleteProfileCredentials {
//   // Add fields as needed for profile completion
//   [key: string]: any;
// }

// export interface OTPData {
//   email: string;
//   otp: string;
// }

// export interface ResetPasswordData {
//   token: string;
//   password: string;
//   // Add other fields if needed
//   [key: string]: any;
// }
// // const apiUrl = "https://techecho-live.onrender.com/api/users"
// const apiUrl = "http://localhost:3001/api/v1/users";

// export const authAPI = {
//   login: (credentials: LoginCredentials) =>
//     axios.post(`${apiUrl}/login`, credentials),

//   completeProfile: (credentials: CompleteProfileCredentials) =>
//     axios.post(`${apiUrl}/complete-profile`, credentials),

//   logout: () => axios.post(`${apiUrl}/logout`),

//   getOTP: (email: string) => axios.post(`${apiUrl}/send-otp`, { email }),

//   verifyOTP: (data: OTPData) => axios.post(`${apiUrl}/verify-otp`, data),

//   resendVerificationCode: (email: string) =>
//     axios.post(`${apiUrl}/resend-verification-code`, { email }),

//   forgotPassword: (email: string) =>
//     axios.post(`${apiUrl}/forgot-password`, { email }),

//   resetPassword: (data: ResetPasswordData) =>
//     axios.post(`${apiUrl}/reset-password/${data.token}`, data),

//   getUser: () => axios.get(`${apiUrl}/user`),
// };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const backend_url = import.meta.env.VITE_BACKEND_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${backend_url}/api/v1/users`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/verify-otp",
        method: "POST",
        body: credentials,
      }),
    }),
    getOtp: builder.mutation({
      query: (credentials) => ({
        url: "/send-otp",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/reset-password",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetUserQuery,
  useLogoutMutation,
  useGetOtpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
