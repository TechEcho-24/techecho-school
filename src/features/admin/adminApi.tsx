import axios from "axios";

axios.defaults.withCredentials = true;

const apiUrl = "http://localhost:3001/api/v1";
export const adminAPI = {
  login: (data: any) => axios.post(`${apiUrl}/admin/login`, data),
  getUsers: () => axios.get(`${apiUrl}/admin/users`),
  getTracks: () => axios.get(`${apiUrl}/tracks`),
  addTrack: (data: any) => axios.post(`${apiUrl}/courses/add-track`, data),
  deleteUser: (id: string) => axios.delete(`${apiUrl}/admin/users/${id}`),
  getCalls: () => axios.get(`${apiUrl}/admin/calls`),
  deleteCall: (id: string) => axios.delete(`${apiUrl}/admin/calls/${id}`),
  addCourse: (data: any) => axios.post(`${apiUrl}/courses/add-course`, data),
  deleteCourses: (id: string) => axios.delete(`${apiUrl}/courses/${id}`),
  updateCourse: (id: string, data: any) =>
    axios.put(`${apiUrl}/courses/${id}`, data),
  createManualPayment: (data: any) =>
    axios.post(`${apiUrl}/payments/manual`, data),
  getHelpCalls: () => axios.get(`${apiUrl}/help`),
  deleteHelpCall: (id: string) => axios.delete(`${apiUrl}/help/${id}`),
  updateHelpCall: (id: string) => axios.patch(`${apiUrl}/help/${id}`),
};
