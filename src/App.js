import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { JournalSection } from "./components/journal-section/JournalSection";
import { Post } from "./components/post/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/components.scss";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JournalSection />}></Route>
        <Route path="/:slug" element={<JournalSection />}></Route>
        <Route path="/post/:slug" element={<Post />}></Route>
        <Route exact path="/about"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
