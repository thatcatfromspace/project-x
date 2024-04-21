import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page.jsx";
import HomePage from "./home-page.jsx";
import ProductPage from "./product-page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
