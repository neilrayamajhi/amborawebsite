import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { APP_STORE_URL, SUPPORT_EMAIL } from '../lib/links';
import './contact.css';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  // Curtain lifts as the section enters view
  useScrollProgress(ref, '--contact-scroll', { leadIn: 0.35, completeBy: 0.7 });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__sticky">
        <div className="contact__panel" aria-hidden="true" />
        <div className="contact__curtain" aria-hidden="true" />

        <div className="contact__bignum" aria-hidden="true">05</div>

        <div className="contact__inner container">
          <div className="contact__eyebrow">
            <span>05</span>
            <span>—</span>
            <span>get the app</span>
          </div>

          <h2 className="contact__title">
            <span className="contact__title-line contact__title-line--1">rank</span>
            <span className="contact__title-line contact__title-line--2">that.</span>
          </h2>

          <p className="contact__lede">
            Ambora Social is live on the App Store — free for iPhone. Rank what you love,
            share the scores, and let the feed argue back.
          </p>

          <a
            href={APP_STORE_URL}
            className="contact__email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__email-text">Download on the App Store</span>
            <span className="contact__email-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <p className="contact__support">
            Support:{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
