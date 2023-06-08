import React from "react";
import { Navigate } from "react-router-dom";
import UsernameContext from "../context/UsernameContext";

function RequireAuth({ children }) {
  const [username, setUsername] = React.useContext(UsernameContext);

  return username ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;