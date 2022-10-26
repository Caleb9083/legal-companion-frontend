import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Constitution from "./pages/Constitution";
import ChaptersPage from "./pages/ChaptersPage";
import SectionsPage from "./pages/SectionsPage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import Auth from "./pages/Auth";
import { UserContext } from "./context/userContext";


function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/constitutions" element={<Constitution />} />
              <Route
                path="/constitutions/:constitutionId"
                element={<ChaptersPage />}
              />
              <Route
                path="/constitutions/:constitutionId/chapters/:chapterId"
                element={<SectionsPage />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
