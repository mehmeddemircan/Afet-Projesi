import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import { isUserLoggedIn } from "./redux/actions/AuthActions";
import {useSelector, useDispatch} from 'react-redux'
import BrandsPage from "./pages/BrandsPage";
import BrandDetailsPage from "./pages/BrandDetailsPage";
import FormCategoryPage from "./pages/FormCategoryPage";
import FormCategoryDetailsPage from "./pages/FormCategoryDetailsPage";
import ClothingFormsPage from "./pages/ClothingFormsPage";
import ShelterFormsPage from "./pages/ShelterFormsPage";
import MealFormsPage from "./pages/MealFormsPage";
import MyBasketPage from "./pages/MyBasketPage";
import { UpdateLiveLocation } from "./redux/actions/UserActions";


function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
 
 // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  const [location, setLocation] = useState(null);

  // const dispatch = useDispatch();
  // Check if user has shared location before
  const [watchId, setWatchId] = useState(null);

  const updateUserLocation = useSelector((state) => state.user.updateUserLocation)

  useEffect(() => {
    let watchId = null;

 
      if (auth.authenticate) {
        if ("permissions" in navigator) {
          navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted") {
          
                 
              watchId = navigator.geolocation.watchPosition(
                (position) => {
                  setLocation(position.coords);
                  dispatch(
                    UpdateLiveLocation(
                      auth.user._id,
                      location?.latitude,
                      location?.longitude
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
    
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setLocation(position.coords);
                    dispatch(
                      UpdateLiveLocation(
                        auth.user._id,
                        location?.latitude,
                        location?.longitude
                      )
                    );
                 
                },
                (error) => console.log(error)
              );
            } else {
            
              console.log("İzin verilmedi");
            }
          });
        } else {
         
          console.log("izinleri desteklenmiyor");
        }
        setWatchId(watchId);
    
        return () => {
          if (watchId) {
            navigator.geolocation.clearWatch(watchId);
          }
        };
      }
  
  }, [auth, dispatch, location,updateUserLocation.success ]);

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/kategoriler/:name" element={<BrandsPage />} />
        <Route path="/markalar/:id" element={<BrandDetailsPage />} />
        <Route path="/form-kategoriler" element={<FormCategoryPage />} />
        <Route path="/form-kategoriler/:id" element={<FormCategoryDetailsPage />} />
        <Route path="/giyim-formlarım" element={<ClothingFormsPage />} />
        <Route path="/barınma-formlarım" element={<ShelterFormsPage />} />
        <Route path="/gida-formlarım" element={<MealFormsPage />} />
        <Route path="/sepetim" element={<MyBasketPage />} />
 
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
