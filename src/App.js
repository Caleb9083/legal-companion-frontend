import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            {/* <Route path="/" element={} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
