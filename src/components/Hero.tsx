import { ScoreBadge } from './ScoreBadge';
import './hero.css';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__scene" aria-hidden="true">
        <div className="hero__scene-conic" />
        <div className="hero__scene-vignette" />
        <div className="hero__scene-grain" />
      </div>

      <div className="hero__frame">
        <div className="hero__eyebrow">
          <span className="hero__pill">ambora <span className="hero__slash">\</span> social</span>
          <span className="hero__eyebrow-text">The social ranking app · v1.0</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__word hero__word--1">rank</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__word hero__word--2">that<span className="hero__dot">.</span></span>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__lede">
            Everything you love has an order. Score it, share it, and let the
            feed argue back — <em>tastefully</em>.
          </p>

          <div className="hero__scores" aria-hidden="true">
            <ScoreBadge score={10.0} size={44} />
            <ScoreBadge score={8.4}  size={44} />
            <ScoreBadge score={5.1}  size={44} />
            <ScoreBadge score={2.3}  size={44} />
          </div>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span>scroll</span>
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path d="M6 1v11m0 0L1 7m5 5l5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="hero__marker hero__marker--tl">01 / hero</div>
      <div className="hero__marker hero__marker--tr">rank that</div>
      <div className="hero__marker hero__marker--bl">© ambora social</div>
      <div className="hero__marker hero__marker--br">est. 2026</div>
    </section>
  );
}
