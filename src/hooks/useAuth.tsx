import { useGetUserQuery } from "@/features/auth/authApi";

export const useAuth = () => {
  const { data, isLoading, isError } = useGetUserQuery({});
  console.log(data);

  const user = data || null;
  // const role = data?.isAdmin ? "admin" : "user";

  return { user, isLoading, isError };
};
