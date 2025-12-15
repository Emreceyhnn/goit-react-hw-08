import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();

  return !isLoggedIn ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    <>{children}</>
  );
};

export default PrivateRoute;
