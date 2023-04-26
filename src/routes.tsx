
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (

  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/shop' element={<ShopPage />} />
    <Route path='/shop' element={<ProtectedRoutes />}>
        <Route index element={<ShopPage />} />
    </Route>
  </Routes>

);

export default Router;
