import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>E-Commerce App</h2>

        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart</Link>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;