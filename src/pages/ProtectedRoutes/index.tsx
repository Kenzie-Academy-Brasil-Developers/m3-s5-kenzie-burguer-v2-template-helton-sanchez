import { Navigate, Outlet, } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem('@TOKEN')

  return (
    <div>
      {token ? <Outlet /> : <Navigate to='/' />}
    </div>);
};

export default ProtectedRoutes;
