import { SiteLoader } from './components/SiteLoader';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <SiteLoader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <AppShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
