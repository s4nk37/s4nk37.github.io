import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';
import Articles from './components/Sections/Articles';
import ArticlesPage from './components/Pages/ArticlesPage';
import Loader from './components/UI/Loader';

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
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
              <Hero />
              <Skills />
              <Projects />
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
      </Routes>
    </>
  );
}

export default App;
