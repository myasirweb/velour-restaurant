import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Chef from "./pages/Chef";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Gallery from "./pages/Gallery";
import ErrorPages from "./pages/ErrorPages";
import Chefdetails from "./pages/Chefdetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/chef" element={<Chef />}></Route>
        <Route path="/meet-the-chef/:id" element={<Chefdetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/*" element={<ErrorPages />}></Route>
      </Route>
    </Routes>
  );
}
