
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import AreaPage from './pages/AllAreaPage';
import { ToastContainer } from 'react-toastify';
import AllAreaPage from './pages/AllAreaPage';
import AreaDetailsPage from './pages/AreaDetailsPage';
import CategoriesPage from './pages/CategoriesPage';
import SubCategoriesPage from './pages/SubCategoriesPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './redux/actions/AuthActions';
import { useEffect } from 'react';
import AntdUploadPage from './pages/AntdUploadPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  return (
 
    <Router>
      <ToastContainer />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/kisiler" element={<PeoplePage />} />
        <Route path="/alanlar" element={<AllAreaPage />} />
        <Route path="/alanlar/:id" element={<AreaDetailsPage />} />
        <Route path="/kategoriler" element={<CategoriesPage />} />
        <Route path="/altkategoriler" element={<SubCategoriesPage />} />
        <Route path="/kullanicilar" element={<UsersPage />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/urunler/:id" element={<ProductDetailsPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/password/reset/:token" element={<ResetPasswordPage />} />
        <Route path="/upload" element={<AntdUploadPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
