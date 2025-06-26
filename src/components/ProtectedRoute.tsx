import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { LoginModal } from "./auth/LoginModal";

export const EnrollProtectedRoutes: React.FC = () => {
  const { authenticated } = useSelector((state: any) => state.auth);
  return authenticated ? <Outlet /> : <Navigate to={"/"} />;
};

export const AdminProtectedRoutes: React.FC = () => {
  const { authenticated, admin } = useSelector((state: any) => state.admin);
  console.log("admin test", authenticated, admin);
  return authenticated && admin?.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login/admin"} />
  );
};

export const PublicRoutes: React.FC = () => {
  const { authenticated, user } = useSelector((state: any) => state.auth);
  if (authenticated && !user?.isAdmin) {
    return <Navigate to={"/course"} />;
  } else {
    return <Outlet />;
  }
  // return !authenticated ? <Outlet /> : <Navigate to={"/admin/users"} />;
};
