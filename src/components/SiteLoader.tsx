import { useEffect, useState } from 'react';
import './site-loader.css';

export function SiteLoader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'entering' | 'exiting' | 'gone'>('entering');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPhase('gone');
      document.documentElement.classList.remove('loading');
      return;
    }
    document.documentElement.classList.add('loading');

    const start = performance.now();
    const DURATION = 1200;
    let raf: number;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase('exiting');
        setTimeout(() => setPhase('gone'), 900);
        setTimeout(() => document.documentElement.classList.remove('loading'), 600);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className="site-loader" data-phase={phase} aria-hidden="true">
      <div className="site-loader__stack">
        <div className="site-loader__wordmark">
          ambora <span className="site-loader__slash">\</span> social
        </div>
        <div className="site-loader__progress">
          <div className="site-loader__progress-bar" style={{ transform: `scaleX(${count / 100})` }} />
        </div>
        <div className="site-loader__counter">
          <span>{String(count).padStart(3, '0')}</span>
          <span className="site-loader__counter-of">/ 100</span>
        </div>
      </div>
      <div className="site-loader__slogan">rank that<span className="site-loader__slogan-dot">.</span></div>
    </div>
  );
}
