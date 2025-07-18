// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//     authenticated: false,
//     purchasedCourses: false,
//     error: null,
//     loading: false,
//     avatar: null,
//     courses: [],
//     course: null,
//     blogs: [],
//     blog: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     const cases = [
//       getUser,
//       getCourses,
//       uploadImage,
//       requestCall,
//       getCourse,
//       scheduleForm,
//       getBlog,
//       getBlogs,
//     ];

//     cases.forEach((c) => {
//       builder
//         .addCase(c.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(c.fulfilled, (state, action) => {
//           console.log(`Fulfilled action: ${c.typePrefix}`, action); // Check if this is logged
//           state.loading = false;
//           if (c === getUser) {
//             state.user = action.payload.user;
//             state.avatar = action.payload.user.avatar;
//             state.purchasedCourses = action.payload.user.purchasedCourses;
//             state.authenticated = true;
//           } else if (c === getCourses) {
//             state.courses = action.payload.courses;
//           } else if (c === getCourse) {
//             state.course = action.payload.course;
//           } else if (c === getBlog) {
//             state.blog = action.payload;
//           } else if (c === getBlogs) {
//             console.log("Blogs:", action.payload); // Check if this is logged
//             state.blogs = action.payload;
//           }
//         })
//         .addCase(c.rejected, (state, action) => {
//           console.error(`Rejected action: ${c.typePrefix}`, action); // Log error details
//           state.loading = false;
//           state.error = action.payload as any;
//         });
//     });
//   },
// });

// export default userSlice.reducer;
