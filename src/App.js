import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager"

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path="/" element={<Home />} />
    <Route path="/product" element={<ProductList />} />
    <Route path="/task-manager" element={<TaskManager />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

