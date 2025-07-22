import React, { useState } from "react";
import { Navbar } from "./NavBar";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { Footer } from "./Footer";

export const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Navbar*/}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <About darkMode={darkMode} />

      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* Projects Section */}
      <Projects darkMode={darkMode} />

      {/* Contact Section */}
      <Contact darkMode={darkMode} />

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};
