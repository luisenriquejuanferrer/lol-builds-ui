import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MakeABuildPage from "./pages/MakeABuildPage";
import HomePage from "./pages/HomePage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/make-a-build" element={<MakeABuildPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
