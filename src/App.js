import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import Constitution from './pages/Constitution';
import ChaptersPage from './pages/ChaptersPage';
import SectionsPage from './pages/SectionsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
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

    </div>
  );
}

export default App;
