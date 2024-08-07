import LoadingScreen from "@/components/LoadingScreen";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function AuthRequired({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();
  const location = useLocation();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
}

export default AuthRequired;
