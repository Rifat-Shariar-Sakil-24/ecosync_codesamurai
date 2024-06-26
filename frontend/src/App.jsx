import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import VehiclesPage from './pages/VehiclesPage';
import STSPage from './pages/STSPage';
import LandfieldPage from './pages/LandfieldPage';
import RolePage from './pages/RolePage';
import BillPage from './pages/BillPage';

import Header from './components/Header';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';


const App = () => {

  
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <div>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/loginPage" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        ):(
          <div>
            <Header setIsLoggedIn={setIsLoggedIn}/>
            <div className="content-page-container">
              <div className="content-page-left-container">
                <SideMenu/>
              </div>
              <div className="content-page-right-container">
                <Routes>
                  <Route path='/dashboard' element={<DashboardPage/>}></Route>
                  <Route path='/users' element={<UsersPage/>}></Route>
                  <Route path='/vehicles' element={<VehiclesPage/>}></Route>
                  <Route path='/sts' element={<STSPage/>}></Route>
                  <Route path='/landfield' element={<LandfieldPage/>}></Route>
                  <Route path='/role' element={<RolePage/>}></Route>
                  <Route path='/bill' element={<BillPage/>}></Route>

                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </div>
            </div>
            <Footer/>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;