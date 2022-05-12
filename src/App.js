import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";
import Inventory from "./pages/Inventory/Inventory";
import AddItem from "./pages/AddItem/AddItem";

function App() {
  return (
    <div className=" max-w-7xl mx-auto lg:px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
