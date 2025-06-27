import { AdminDashboard } from "../components/admin/AdminDashboard";
import { ProfileNavbar } from "../components/user/ProfileNavbar";
import Header from "../pages/Header.jsx";
import { matchPath } from "react-router-dom";

// Static profile routes
const ProfileNavbarRoutes = [
  "/course",
  "/profile",
  "/profile/settings",
  "/community/faq",
  "/help",
];

// Dynamic pattern-based routes
const ProfileDynamicRoutes = [
  "/courses/:courseId",
  "/courses/:courseId/tracks/:trackId",
];

// Admin routes
const adminRoutes = [
  "/admin",
  "/admin/users",
  "/admin/enrolledUsers",
  "/admin/calls",
  "/admin/add-course",
  "/admin/courses",
  "/admin/add-user",
  "/admin/help-calls",
  "/admin/tracks",
];

// Helper function to match dynamic routes
const matchesAnyRoute = (pathname: string, routes: string[]) =>
  routes.some((route: string) => matchPath({ path: route, end: false }, pathname));

const UseNavbarType = (location: any) => {
  if (adminRoutes.includes(location.pathname)) {
    return AdminDashboard;
  }

  if (
    ProfileNavbarRoutes.includes(location.pathname) ||
    matchesAnyRoute(location.pathname, ProfileDynamicRoutes)
  ) {
    return ProfileNavbar;
  }

  return Header;
};

export default UseNavbarType;
