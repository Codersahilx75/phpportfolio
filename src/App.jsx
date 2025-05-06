import React from "react";
import "./App.css";
import Layout from "./layout/Layout.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Layout>
      <section id="profile" className="scroll-mt-16">
        <Profile />
      </section>

      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <section id="project" className="scroll-mt-16">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;
