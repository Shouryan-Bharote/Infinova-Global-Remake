// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";
import AboutUs from "../pages/HomePage/Sections/AboutUs/AboutUs";
import CareersPage from "../pages/CareersPage/CareersPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import MissionPage from "../pages/MissionPage/MissionPage";
import VisionPage from "../pages/VisionPage/VisionPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import EduventuresCourses from "../pages/EduventuresCoursesPage/EduventuresCoursesPage";
import CourseFormPage from "../pages/CourseFormPage/CourseFormPage";
import ComingSoon from "../pages/comingsoon/comingsoon";



const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/coming-soon" element={<ComingSoon/>} />
        <Route path="/courses" element={<EduventuresCourses />} />
        <Route path="/course-form" element={<CourseFormPage />} />
        
        
        
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
