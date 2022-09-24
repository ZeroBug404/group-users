import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
  
    if (loading) {
      return (
        <div style={{height: '81vh'}} className="w-100 d-flex justify-content-center   align-items-center">
          {/* <Spinner animation="border" variant="danger" /> */}
        </div>
      );
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  };
  
  export default RequireAuth;