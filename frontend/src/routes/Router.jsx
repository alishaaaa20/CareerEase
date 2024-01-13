import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import StudentDashboard from "../components/User/Userdashboard";
import Dashboard from "../components/Mentor/MentorDashboard";
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

import MBBS from "../pages/colleges/Medical/mbbs";
import BDS from "../pages/colleges/Medical/bds";
import BTech from "../pages/colleges/Medical/btech";
import BPharm from "../pages/colleges/Medical/bpharm";
import BPhysio from "../pages/colleges/Medical/physiology";
import Bams from "../pages/colleges/Medical/bams";
import Bsc from "../pages/colleges/Medical/bsc";
import Bpt from "../pages/colleges/Medical/bpt";

import Bbme from "../pages/colleges/Engineering/bbme";
import Bce from "../pages/colleges/Engineering/bce";
import Bche from "../pages/colleges/Engineering/bche";
import Bece from "../pages/colleges/Engineering/bece";
import Bee from "../pages/colleges/Engineering/bee";
import Beit from "../pages/colleges/Engineering/beit";
import Bme from "../pages/colleges/Engineering/bme";
import Bie from "../pages/colleges/Engineering/bie";
import Bse from "../pages/colleges/Engineering/bse";

import BBA from "../pages/colleges/Management/bba";
import BBM from "../pages/colleges/Management/bbm";
import BHM from "../pages/colleges/Management/bhm";
import BIM from "../pages/colleges/Management/bim";
import BMTM from "../pages/colleges/Management/bmtm";
import BPA from "../pages/colleges/Management/bpa";
import BTTM from "../pages/colleges/Management/bttm";
import CA from "../pages/colleges/Management/ca";

import BAA from "../pages/colleges/Humanities/baa";
import BAE from "../pages/colleges/Humanities/bae";
import BAS from "../pages/colleges/Humanities/bas";
import BDEVS from "../pages/colleges/Humanities/bdevs";
import BJMC from "../pages/colleges/Humanities/bjmc";
import BLAS from "../pages/colleges/Humanities/blas";
import BMUS from "../pages/colleges/Humanities/bmus";
import BSW from "../pages/colleges/Humanities/bsw";

import BCA from "../pages/colleges/Technology/bca";
import CSIT from "../pages/colleges/Technology/csit";
import BIT from "../pages/colleges/Technology/bit";

import BFD from "../pages/colleges/Fashion/bfd";

import BID from "../pages/colleges/Interior/interior";

import BFS from "../pages/colleges/Film/film";

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

      <Route path="/services/medical/mbbs" element={<MBBS />} />
      <Route path="/services/medical/bds" element={<BDS />} />
      <Route path="/services/medical/btech" element={<BTech />} />
      <Route path="/services/medical/bpharm" element={<BPharm />} />
      <Route path="/services/medical/physiology" element={<BPhysio />} />
      <Route path="/services/medical/bams" element={<Bams />} />
      <Route path="/services/medical/bsc" element={<Bsc />} />
      <Route path="/services/medical/bpt" element={<Bpt />} />

      <Route path="/services/engineering/bbme" element={<Bbme />} />
      <Route path="/services/engineering/bce" element={<Bce />} />
      <Route path="/services/engineering/bche" element={<Bche />} />
      <Route path="/services/engineering/bece" element={<Bece />} />
      <Route path="/services/engineering/bee" element={<Bee />} />
      <Route path="/services/engineering/beit" element={<Beit />} />
      <Route path="/services/engineering/bie" element={<Bie />} />
      <Route path="/services/engineering/bme" element={<Bme />} />
      <Route path="/services/engineering/bse" element={<Bse />} />

      <Route path="/services/management/bba" element={<BBA />} />
      <Route path="/services/management/bbm" element={<BBM />} />
      <Route path="/services/management/bhm" element={<BHM />} />
      <Route path="/services/management/bim" element={<BIM />} />
      <Route path="/services/management/bmtm" element={<BMTM />} />
      <Route path="/services/management/bpa" element={<BPA />} />
      <Route path="/services/management/bttm" element={<BTTM />} />
      <Route path="/services/management/ca" element={<CA />} />

      <Route path="/services/humanities/baa" element={<BAA />} />
      <Route path="/services/humanities/bae" element={<BAE />} />
      <Route path="/services/humanities/bas" element={<BAS />} />
      <Route path="/services/humanities/bdevs" element={<BDEVS />} />
      <Route path="/services/humanities/bjmc" element={<BJMC />} />
      <Route path="/services/humanities/blas" element={<BLAS />} />
      <Route path="/services/humanities/bmus" element={<BMUS />} />
      <Route path="/services/humanities/bsw" element={<BSW />} />

      <Route path="/services/technology/bca" element={<BCA />} />
      <Route path="/services/technology/csit" element={<CSIT />} />
      <Route path="/services/technology/bit" element={<BIT />} />

      <Route path="/services/fashion/bfd" element={<BFD />} />

      <Route path="/services/interior/bid" element={<BID />} />

      <Route path="/services/film/bfs" element={<BFS />} />

      <Route path="/studentdashboard" element={<StudentDashboard />} />
      <Route path="/mentordashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
