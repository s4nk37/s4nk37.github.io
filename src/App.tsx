
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
