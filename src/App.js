import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";
import Inventory from "./pages/Inventory/Inventory";
import AddItem from "./pages/AddItem/AddItem";
import ProductDetails from "./pages/Products/ProductDetails";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className=" max-w-7xl mx-auto lg:px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
