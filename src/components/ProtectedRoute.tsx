import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectTo = "/login" }) => {
  const { user, isLoading } = useAuth();
  console.log(user);

  if (isLoading) return <div className='text-white text-2xl'>Loading...</div>;

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export const PublicRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div className='text-white text-2xl'>Loading...</div>;

  if (user) {
    return <Navigate to={"/course"} replace />;
  }

  return <Outlet />;
};
