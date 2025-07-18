// import axios from "axios";

// const apiUrl = "http://localhost:3001/api/v1";

// export const userAPI = {
//   getUser: (id: string) => axios.get(`${apiUrl}/admin/users/${id}`),
//   getCourses: () => axios.get(`${apiUrl}/courses`),
//   uploadImage: async (file: File) => {
//     const formData = new FormData();
//     formData.append("image", file); // The key 'image' must match the field name in Multer's middleware

//     try {
//       const response = await axios.post(
//         `${apiUrl}/users/profile-image`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Image uploaded successfully:", response.data);
//     } catch (error: any) {
//       console.error(
//         "Error uploading image:",
//         error.response?.data || error.message
//       );
//     }
//   },
//   getCourse: (id: string) => axios.get(`${apiUrl}/courses/${id}`),
//   requestCall: (data: any) => axios.post(`${apiUrl}/help`, data),
//   scheduleForm: (data: any) =>
//     axios.post(`${apiUrl}/users/call?scheduledBy=student`, data),
//   getBlogs: () => axios.get(`${apiUrl}/blogs`),
//   getBlog: (id: string) => axios.get(`${apiUrl}/blogs/${id}`),
// };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (data) => ({
        url: "/users/profile-image",
        method: "POST",
        body: data,
      }),
    }),
    getAllCourses: builder.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
    }),
    getSingleCourse: builder.query({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "GET",
      }),
    }),
    requestCall: builder.mutation({
      query: (data) => ({
        url: "/help",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useUploadImageMutation,
  useGetAllCoursesQuery,
  useGetSingleCourseQuery,
  useRequestCallMutation,
} = userApi;
