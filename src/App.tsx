import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import PersonalProjects from './components/Sections/PersonalProjects';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';
import Articles from './components/Sections/Articles';
import ArticlesPage from './components/Pages/ArticlesPage';
import NotFound from './components/Pages/NotFound';
import Loader from './components/UI/Loader';
import SEO from './components/Utils/SEO';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved as 'light' | 'dark';
    return 'light'; // Always default to light theme
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: 'light' | 'dark') => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={
          <div className="app">
            <SEO
              title="Sanket Patel | Mobile Application Developer"
              description="Mobile Application Developer with 1.5+ years of experience in Flutter and React Native. Specializing in building scalable, high-quality apps with clean architecture."
              keywords={["Mobile Application Developer", "Flutter Developer", "React Native Developer", "Sanket Patel", "Portfolio"]}
            />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
              <Hero />
              <Projects />
              <Skills />
              <PersonalProjects />
              <Articles />
              <Experience />
              <About />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/articles" element={
          <ArticlesPage theme={theme} toggleTheme={toggleTheme} />
        } />
        <Route path="*" element={
          <NotFound theme={theme} toggleTheme={toggleTheme} />
        } />
      </Routes>
    </>
  );
}

export default App;
