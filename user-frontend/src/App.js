import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import { isUserLoggedIn } from "./redux/actions/AuthActions";
import {useSelector, useDispatch} from 'react-redux'
import BrandsPage from "./pages/BrandsPage";
import BrandDetailsPage from "./pages/BrandDetailsPage";
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
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/kategoriler/:name" element={<BrandsPage />} />
        <Route path="/markalar/:id" element={<BrandDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
