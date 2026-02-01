// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";



const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/blog" element={<Blog />} /> */}

      {/* 404 Not Found - Optional */}
      {/* <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-[#FFF5DC]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#4A1D1F] mb-4">404</h1>
          <p className="text-xl text-[#6B4A38] mb-8">Page not found</p>
          <a href="/" className="bg-[#5C3D2E] text-[#F5E6D3] px-8 py-3 rounded-lg hover:bg-[#6B4A38] transition-colors">
            Go Home
          </a>
        </div>
      </div>} /> */}
    </Routes>
  );
};

export default AppRoutes;
