import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import Constitution from './pages/Constitution';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/constitutions" element={<Constitution />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
