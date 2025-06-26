import axios from "axios";

axios.defaults.withCredentials = true;

// Types for API parameters
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface CompleteProfileCredentials {
  // Add fields as needed for profile completion
  [key: string]: any;
}

export interface OTPData {
  email: string;
  otp: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  // Add other fields if needed
  [key: string]: any;
}

const apiUrl = "http://localhost:3001/api/users";
export const authAPI = {
  login: (credentials: LoginCredentials) => axios.post(`${apiUrl}/login`, credentials),
  completeProfile: (credentials: CompleteProfileCredentials) =>
    axios.post(`${apiUrl}/complete-profile`, credentials),
  logout: (): Promise<any> => axios.post(`${apiUrl}/logout`),
  getOTP: (email: string): Promise<any> => axios.post(`${apiUrl}/send-otp`, { email }),
  verifyOTP: (data: OTPData): Promise<any> => axios.post(`${apiUrl}/verify-otp`, data),
  // verifyEmail: (code: string): Promise<any> => axios.post(`${apiUrl}/verify-email`, { code }),
  resendVerificationCode: (email: string): Promise<any> =>
    axios.post(`${apiUrl}/resend-verification-code`, { email }),
  forgotPassword: (email: string): Promise<any> => axios.post(`${apiUrl}/forgot-password`, { email }),
  resetPassword: (data: ResetPasswordData): Promise<any> =>
    axios.post(`${apiUrl}/reset-password/${data.token}`, data),
  getUser: (): Promise<any> => axios.get(`${apiUrl}/user`),
};
