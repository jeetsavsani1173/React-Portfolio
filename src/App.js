import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
// import CodingProfile from "./components/codingprofile/CodingProfile"; // Coming soon
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <CodingProfile /> */}
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
