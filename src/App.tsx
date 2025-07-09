import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
import { useEffect } from "react";
import { Career } from "./pages/Career";
import { Development } from "./components/career/Development";
import { Design } from "./components/career/Design";
import { Marketing } from "./components/career/Marketing";
// import { Login } from "./components/auth/Login";
// import { Signup } from "./components/auth/Signup";
import { ForgotPassword } from "./components/auth/FrogotPassword";
import { ResetPassword } from "./components/auth/ResetPassword";
import { Courses } from "./components/career/Courses";
import { Profile } from "./components/user/Profile";
import { Course } from "./components/user/Course";
import { Setting } from "./components/user/Setting";
import { Faq } from "./components/user/Faq";
import { Help } from "./pages/Help";
import { CoursePage } from "./components/user/CoursePage";
import { Chat } from "./components/help/Chat";
import { TrackPage } from "./components/user/trackPage";
import { ModulePage } from "./components/user/ModulePage";
import { PaymentButton } from "./components/auth/PaymentButton";
import UseNavbarType from "./hooks/UseNavbarType";
import { Users } from "./components/admin/Users";
import { CourseForm } from "./components/admin/CourseForm";
import { Calls } from "./components/admin/Calls";
import { HelpCalls } from "./components/admin/HelpCalls";
import TrackList from "./components/admin/Track";
import { QueryCallForm } from "./components/career/QueryCallForm";
import {
  AdminProtectedRoutes,
  EnrollProtectedRoutes,
  PublicRoutes,
} from "./components/ProtectedRoute";
import Home from "./pages/Home";
import { Blog } from "./pages/Blog";
// import { Contact } from "./pages/Contact";
import { BlogDetail } from "./components/BlogDetail";
import { About } from "./pages/About";
import ScrollToTop from "./components/ScrollTop";
import NotFound from "./pages/Error404";
// import ScrollToTop from "./";

function App() {
  const location = useLocation();

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  }, []);

  useEffect(() => {
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    console.log("Current Date:", time);
  }, []);

  const NavbarToRender = UseNavbarType(location);

  return (
    <>
      <div className="relative min-h-screen  bg-white overflow-x-hidden">
        <ScrollToTop />
        <NavbarToRender />
        <Routes>
          {/* public routes  */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/web-dev" element={<Development />} />
            <Route path="/career/design" element={<Design />} />
            <Route path="/career/marketing" element={<Marketing />} />

            {/* <Route path='/login' element={<Login role='user' />} /> */}
            {/* <Route path="/login/admin" element={<Login role="admin" />} /> */}
            <Route path="/schedule" element={<QueryCallForm />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/blogs" element={<Blog page="blog" />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound/>} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminProtectedRoutes />}>
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/add-course" element={<CourseForm />} />
            <Route path="/admin/courses" element={<Courses />} />
            <Route path="/admin/calls" element={<Calls />} />
            {/* <Route path="/admin/add-user" element={<Signup />} /> */}
            <Route path="/admin/help-calls" element={<HelpCalls />} />
            <Route
              path="/admin/payment"
              element={<PaymentButton formPlaceholder="admin" role="admin" />}
            />
            <Route path="/admin/tracks" element={<TrackList />} />
          </Route>

          {/* User Routes */}

          <Route element={<EnrollProtectedRoutes />}>
            <Route path="/course" element={<Course />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/settings" element={<Setting />} />
            <Route path="/community/faq" element={<Faq />} />
            <Route path="/help" element={<Help />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CoursePage />} />
            <Route
              path="/courses/:courseId/tracks/:trackId"
              element={<TrackPage />}
            />
            <Route
              path="/courses/:courseId/tracks/:trackId/modules/:moduleId"
              element={<ModulePage />}
            />
          </Route>
          <Route
            path="/payment"
            element={<PaymentButton role="user" formPlaceholder="user" />}
          />
        </Routes>

        {/* Footer and Floating Action Button */}
        {/* {authenticated || getItem("adminAuth") ? "" : <Footer />}
        {authenticated || getItem("adminAuth") ? "" : <FloatingActionButton />} */}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
