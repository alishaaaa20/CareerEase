import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import UserDashboard from "../components/User/Userdashboard";
import Dashboard from "../admin/Dashboard";
import { Routes, Route } from "react-router-dom";
import QA from "../pages/QA/QA";
import Medical from "../pages/courses/Medical";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/qna" element={<QA />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/medical" element={<Medical />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
