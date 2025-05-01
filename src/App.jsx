import "./App.css";
import Header from "./components/Header";
import "./output.css";
import Education  from "./components/Education";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contract from "./components/Contract";

function App() {
  return (
    <>
      <Header />
      <div
        className="block flex-col md:flex-row justify-center items-center text-center
          md:max-w-8xl mx-auto app-body top-0"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
