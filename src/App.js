import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { BlogSection } from "./components/blog-section/BlogSection";
import { Post } from "./components/post/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/components.scss";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogSection />}></Route>
        <Route path="/:slug" element={<BlogSection />}></Route>
        <Route path="/post/:slug" element={<Post />}></Route>
        <Route exact path="/about"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
