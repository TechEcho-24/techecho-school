import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import adminReducer from "../features/admin/adminSlice";
import { authApi } from "@/features/auth/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // auth: authReducer,
    user: userReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
