import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Artists from '../pages/Artists/Artists';
import ArtistDetails from '../pages/Artists/ArtistDetails';
import UserDashboard from "../components/User/Userdashboard";
import ArtistDashboard from "../components/Artist/ArtistDashboard";
import Dashboard from "../admin/Dashboard";
import {Routes, Route} from 'react-router-dom'

const Router = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/artists" element={<Artists/>} />
    <Route path="/artists/:id" element={<ArtistDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/userdashboard" element={<UserDashboard/>} />
    <Route path="/artistdashboard" element={<ArtistDashboard/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    
  </Routes>
}

export default Router