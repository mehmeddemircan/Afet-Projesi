import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import AreaPage from "./pages/AllAreaPage";
import { ToastContainer } from "react-toastify";
import AllAreaPage from "./pages/AllAreaPage";
import AreaDetailsPage from "./pages/AreaDetailsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SubCategoriesPage from "./pages/SubCategoriesPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/AuthActions";
import { useEffect, useState } from "react";
import AntdUploadPage from "./pages/AntdUploadPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import FormListPage from "./pages/FormListPage";
import FormCategoryPage from "./pages/FormCategoryPage";
import LocationPage from "./pages/LocationPage";
import TasksPage from "./pages/TasksPage";
import CityCountryPage from "./pages/CityCountryPage";
import { UpdateLiveLocation } from "./redux/actions/UserActions";
import AllBrandPage from "./pages/AllBrandPage";
import BrandDetailsPage from "./pages/BrandDetailsPage";
import ClothingNeedFormPage from "./pages/ClothingNeedFormPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  // const auth = useSelector((state) => state.auth);

  const [location, setLocation] = useState(null);

  // const dispatch = useDispatch();
  // Check if user has shared location before
  const [watchId, setWatchId] = useState(null);
  useEffect(() => {
    let watchId = null;

    if ("permissions" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          // Permission already granted
          watchId = navigator.geolocation.watchPosition(
            (position) => {
              setLocation(position.coords);
              dispatch(
                UpdateLiveLocation(
                  auth.user._id,
                  location.latitude,
                  location.longitude
                )
              );
            },
            (error) => console.log(error),

            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0,
            }
          );
        } else if (result.state === "prompt") {
          // Ask user for permission
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation(position.coords);
              dispatch(
                UpdateLiveLocation(
                  auth.user._id,
                  location.latitude,
                  location.longitude
                )
              );
            },
            (error) => console.log(error)
          );
        } else {
          // Permission denied
          console.log("Permission denied");
        }
      });
    } else {
      // Permissions API not supported
      console.log("Permissions API not supported");
    }
    setWatchId(watchId);

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [auth, dispatch, location]);

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
        <Route path="/yardım-formları" element={<FormCategoryPage />} />
        <Route path="/yardım-formları/:categoryId" element={<FormListPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/gorevler" element={<TasksPage />} />
        <Route path="/sehir-ulke" element={<CityCountryPage />} />
        <Route path="/upload" element={<AntdUploadPage />} />
        <Route path="/markalar" element={<AllBrandPage />} />
        <Route path="/markalar/:brandId" element={<BrandDetailsPage />} />
        <Route path="/giyimformu" element={<ClothingNeedFormPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
