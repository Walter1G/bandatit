import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import VendorLayout from "./pages/VendorLayout";
import AdminLayout from "./pages/AdminLayout";
import NavBar from "./components/NavBar/NavBar";
import AuthPage from "./pages/AuthPage"
import Signup from "./components/Singup/Signup";


function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <div className="content">
            <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<MainLayout />} >
                
              </Route>
            <Route path="/vendor" element={<VendorLayout />} />
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
         
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
