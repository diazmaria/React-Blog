import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { BlogSection } from "./components/blog-section/BlogSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/components.scss";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/software-engineering" element={<BlogSection />}></Route>
        <Route path="/dev-ops" element={<BlogSection />}></Route>
        <Route path="/soft-skills" element={<BlogSection />}></Route>
        <Route path="/about"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
