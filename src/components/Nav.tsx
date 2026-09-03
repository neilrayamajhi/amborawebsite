import { useEffect, useState } from 'react';
import { APP_STORE_URL } from '../lib/links';
import './nav.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__logo" aria-label="Ambora Social home">
        <span>ambora</span>
        <span className="nav__slash">\</span>
        <span>social</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#app">The App</a>
        <a
          href={APP_STORE_URL}
          className="nav__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </nav>
    </header>
  );
}
