import { ScoreBadge } from './ScoreBadge';
import { APP_STORE_URL, MAC_DOWNLOAD_URL, SUPPORT_EMAIL } from '../lib/links';
import './footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__wordmark">
            ambora <span>\</span> social
          </a>
          <div className="footer__scores" aria-hidden="true">
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((n) => (
              <ScoreBadge key={n} score={n} size={22} />
            ))}
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <span className="footer__label">The app</span>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#app">Screens</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">Get it</span>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              App Store
            </a>
            <a href={MAC_DOWNLOAD_URL} download>Mac app</a>
            <a href="#contact">Download</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">Support</span>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </div>
          <div className="footer__col footer__col--last">
            <span className="footer__label">The rule</span>
            <p className="footer__slogan">
              Everything gets a number. <em>Rank that.</em>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} · Ambora Social</span>
          <span className="footer__tick">v1.0 · iPhone · Mac · App Store</span>
          <span>Made with a lot of opinions.</span>
        </div>
      </div>
    </footer>
  );
}
