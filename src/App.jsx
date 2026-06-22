import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Cart from "./Pages/cart/Cart";
import Nav from "./Components/Nav";
import { ShopContextProvider } from "./context/ShopContextProvider";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="wrapper flex flex-col min-h-screen">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <main className="flex-1"/>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
