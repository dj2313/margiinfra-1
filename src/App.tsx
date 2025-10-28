import { ThemeProvider } from './context/ThemeContext';
import { Navbar1 } from './components/ui/navbar-1';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingQuoteButton from './components/FloatingQuoteButton';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-navy-900">
        <Navbar1 />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingQuoteButton />
        <FloatingWhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
