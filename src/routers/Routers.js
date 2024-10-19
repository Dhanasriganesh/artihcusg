import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header'; // Ensure Header is imported
import Home from '../pages/Home';
import Final from '../pages/Final';
import Template from '../pages/Template';
import Detail from '../pages/Detail';
import Preview from '../pages/Preview';
import WordEditor from '../pages/WordEditor';
import UserLogin from '../pages/Userlogin';
import Projects from '../pages/Projects';
import Login from "../pages/Login";
import Adminlogin from '../pages/Adminlogin';
import Admin from '../pages/Admin';
import OtpVerification from '../pages/OtpVerification';
function Routers() {
  return (
    <>
      <Header /> {/* Place the Header here so it renders on every page */}
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/final" element={<Final />} />
        <Route path="/template" element={<Template />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/editor" element={<WordEditor />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/otpverification" element={<OtpVerification />} />
      </Routes>
    </>
  );
}

export default Routers;
