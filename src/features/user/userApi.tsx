import axios from "axios";

const apiUrl = "http://localhost:3001/api/v1";

export const userAPI = {
  getUser: (id: string) => axios.get(`${apiUrl}/admin/users/${id}`),
  getCourses: () => axios.get(`${apiUrl}/courses`),
  getImage: () => axios.get(`${apiUrl}/users/image`, { responseType: "blob" }),
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append("image", file); // The key 'image' must match the field name in Multer's middleware

    try {
      const response = await axios.post(
        `${apiUrl}/users/profile-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
    } catch (error: any) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message
      );
    }
  },
  getCourse: (id: string) => axios.get(`${apiUrl}/courses/${id}`),
  requestCall: (data: any) => axios.post(`${apiUrl}/help`, data),
  scheduleForm: (data: any) =>
    axios.post(`${apiUrl}/users/call?scheduledBy=student`, data),
  getBlogs: () => axios.get(`${apiUrl}/blogs`),
  getBlog: (id: string) => axios.get(`${apiUrl}/blogs/${id}`),
};
