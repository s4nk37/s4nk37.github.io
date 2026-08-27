import { useState, useEffect, Suspense, lazy } from 'react';
import { calculateExperience } from './components/Utils/experience';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Loader from './components/UI/Loader';
import ScrollToTop from './components/UI/ScrollToTop';
import SEO from './components/Utils/SEO';

// Lazy load sections
const About = lazy(() => import('./components/Sections/About'));
const Projects = lazy(() => import('./components/Sections/Projects'));
// const PersonalProjects = lazy(() => import('./components/Sections/PersonalProjects')); // Removed/Consolidated
const Skills = lazy(() => import('./components/Sections/Skills'));
const Experience = lazy(() => import('./components/Sections/Experience'));
const Contact = lazy(() => import('./components/Sections/Contact'));
const Articles = lazy(() => import('./components/Sections/Articles'));
const ArticlesPage = lazy(() => import('./components/Pages/ArticlesPage'));
const ProjectsPage = lazy(() => import('./components/Pages/ProjectsPage'));
const NotFound = lazy(() => import('./components/Pages/NotFound'));

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="app">
            <SEO
              title="Sanket Patel | Software Engineer"
              description={`Software Engineer with ${calculateExperience()}+ years of experience in Flutter and React Native. Specializing in building scalable, high-quality mobile apps with clean architecture.`}
              keywords={["Software Engineer", "Mobile Applications", "Flutter Developer", "React Native Developer", "Sanket Patel", "Portfolio"]}
            />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
              <Hero />
              <Suspense fallback={<div style={{ height: '100vh' }} />}>
                <Projects />
                <Skills />
                <Articles />
                <Experience />
                <About />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </div>
        } />
        <Route path="/articles" element={
          <Suspense fallback={<Loader />}>
            <ArticlesPage theme={theme} toggleTheme={toggleTheme} />
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<Loader />}>
            <ProjectsPage theme={theme} toggleTheme={toggleTheme} />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<Loader />}>
            <NotFound theme={theme} toggleTheme={toggleTheme} />
          </Suspense>
        } />
      </Routes>
    </>
  );
}

export default App;
