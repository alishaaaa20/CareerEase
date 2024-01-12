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
import Engineering from "../pages/courses/Engineering";
import Management from "../pages/courses/Management";
import Humanities from "../pages/courses/Humanities";
import Art from "../pages/courses/Art";
import Fashion from "../pages/courses/Fashion";
import Interior from "../pages/courses/Interior";
import Film from "../pages/courses/Film";
import Technology from "../pages/courses/Technology";

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
      <Route path="/services/engineering" element={<Engineering />} />

      <Route path="/services/management" element={<Management />} />
      <Route path="/services/humanities" element={<Humanities />} />
      <Route path="/services/art" element={<Art />} />
      <Route path="/services/fashion" element={<Fashion />} />
      <Route path="/services/film" element={<Film />} />
      <Route path="/services/interior" element={<Interior />} />
      <Route path="/services/technology" element={<Technology />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
