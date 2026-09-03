import { useRef, type ReactNode } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { DeviceShot } from './mocks/DeviceShot';
import './features.css';

interface FeatureProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  shot: { src: string; alt: string; label: string };
  align?: 'left' | 'right';
}

function Feature({ index, eyebrow, title, copy, shot, align = 'right' }: FeatureProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, '--feature-progress');

  return (
    <article className={`feature feature--${align}`} ref={ref}>
      <div className="feature__sticky">
        <span className="feature__bignum" aria-hidden="true">{index}</span>

        <div className="feature__grid container">
          <div className="feature__body">
            <div className="feature__eyebrow">
              <span className="feature__idx">{index}</span>
              <span>{eyebrow}</span>
            </div>
            <h2 className="feature__title">
              <span className="feature__title-line">
                <span className="feature__title-inner">{title}</span>
              </span>
            </h2>
            <p className="feature__copy">{copy}</p>
          </div>
          <div className="feature__media">
            <DeviceShot src={shot.src} alt={shot.alt} label={shot.label} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section className="features" id="features">
      <Feature
        index="01"
        eyebrow="ranked lists"
        title={<>Sort your world. <em>From #1 to #done.</em></>}
        copy="Build ordered lists of anything you have opinions about — songs, meals, films, obscure hobbies. The score badge makes the gradient of your taste visible at a glance."
        shot={{
          src: '/screens/03-list-songs.png',
          alt: 'Ambora ranked list of songs',
          label: 'Ranked list — Songs',
        }}
        align="right"
      />

      <Feature
        index="02"
        eyebrow="your taste"
        title={<>Your lists are you. <em>Categories are the tell.</em></>}
        copy="The lists you keep — and the categories you bother to rate — show your authentic self. Not a bio. Just what you choose to care about, in order."
        shot={{
          src: '/screens/02-profile-grid.png',
          alt: 'Ambora profile with ranked category tiles',
          label: 'Profile — categories',
        }}
        align="left"
      />

      <Feature
        index="03"
        eyebrow="rate & compare"
        title={<>Good, Mid, or Bad. <em>Then let comparison sharpen it.</em></>}
        copy="The gentlest rating flow you'll ever tap. Three circles to place a thing, then side-by-side comparisons to nudge its rank into place."
        shot={{
          src: '/screens/11-add-rate-compare.png',
          alt: 'Ambora rate and compare flow',
          label: 'Rate & compare',
        }}
        align="right"
      />
    </section>
  );
}
