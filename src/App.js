import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import TaskManager from "./pages/TasksManager"
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route path="/task-manager" element={<TaskManager />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

