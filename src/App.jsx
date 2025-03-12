import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./components/pricing";
import Cart from "./components/cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
