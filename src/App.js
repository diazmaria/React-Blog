import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { BlogSection } from "./components/blog-section/BlogSection";
import { Blog } from "./components/blog/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/components.scss";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about"></Route>
        <Route path="/:slug" element={<BlogSection />}></Route>
        <Route path="/blog/:slug" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
