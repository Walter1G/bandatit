import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import VendorLayout from "./pages/VendorLayout";
import AdminLayout from "./pages/AdminLayout";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <div className="content">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/vendor" element={<VendorLayout />} />
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
