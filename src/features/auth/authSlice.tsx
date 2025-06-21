import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../../utils";
import { getAuthUser, loginUser, resendVerificationCode } from "./authThunk";
import { getOTP, forgotPassword, logoutUser, verifyEmail, resetPassword } from "./authThunk";
import { completeProfile } from "./authThunk";


const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      loading: false,
      error: null,
      authenticated: getItem("authenticated") || false,
      isVerified: getItem("isVerified") || false,
      currentStep: 1,
      purchasedCourses: [],
      isEmailSent: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      const cases = [
        { name: "login", type: loginUser },
        { name: "signup", type: completeProfile },
        { name: "getOTP", type: getOTP },
        { name: "logout", type: logoutUser },
        { name: "verify", type: verifyEmail },
        { name: "resend", type: resendVerificationCode },
        { name: "forgot", type: forgotPassword },
        { name: "reset", type: resetPassword },
        { name: "getAuthUser", type: getAuthUser },
      ];
  
      cases.forEach(({ type }) => {
        builder
          .addCase(type.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(type.rejected, (state, action) => {
            const payload = action.payload as any;
            console.log(payload);
            state.loading = false;
            state.error = payload?.error;
          });
      });
  
      // all fulfilled cases
      builder
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.authenticated = true;
          setItem("authenticated", true);
          setItem("userId", action.payload.user._id);
        })
        .addCase(completeProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          // storing user mail to localStorage
          // setItem("email", action.payload?.user.email);
          removeItem("data");
          removeItem("stepTwoData");
        })
        .addCase(getOTP.fulfilled, (state) => {
          state.loading = false;
          state.isEmailSent = true;
        })
        .addCase(verifyEmail.fulfilled, (state, action) => {
          console.log(action.payload);
          state.loading = false;
          state.user = action.payload.user;
  
          // storing the verified status in localStorage
  
          // setItem("isVerified", true);
          // getItem("adminAuth") && setItem("userId", action.payload.user._id);
          // setItem("authenticated", true);
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.loading = false;
          state.user = null;
          state.authenticated = false;
          removeItem("authenticated");
          removeItem("isVerified");
          removeItem("adminAuth");
          removeItem("email");
          removeItem("admin");
          removeItem("userId");
        })
        .addCase(resendVerificationCode.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(forgotPassword.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(resetPassword.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(getAuthUser.fulfilled, (state, action) => {
          const user = action.payload.user;
  
          if (user.isVerified) {
            setItem("isVerified", true);
            // setItem("authenticated", true);
            state.loading = false;
            state.user = user;
            state.purchasedCourses = user.purchasedCourses;
            state.currentStep = user.step;
          }
        });
    },
  });
  
  export default authSlice.reducer;
  