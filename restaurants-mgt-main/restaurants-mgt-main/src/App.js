import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu.js";
import LoginUser from "./components/Login.js";
import Registration from "./components/Registration.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
