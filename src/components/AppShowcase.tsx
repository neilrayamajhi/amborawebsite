import { DeviceShot } from './mocks/DeviceShot';
import './app-showcase.css';

const screens = [
  {
    label: 'The list',
    sub: 'ranked / scored',
    src: '/screens/03-list-songs.png',
    alt: 'Ambora ranked Songs list with score badges',
  },
  {
    label: 'The self',
    sub: 'profile / categories',
    src: '/screens/02-profile-grid.png',
    alt: 'Ambora profile with category tiles',
  },
  {
    label: 'The feed',
    sub: 'posts / reactions',
    src: '/screens/01-feed-following.png',
    alt: 'Ambora Following feed with scored posts',
  },
  {
    label: 'The rate',
    sub: 'good · mid · bad',
    src: '/screens/11-add-rate-compare.png',
    alt: 'Ambora rate and compare flow',
  },
];

export function AppShowcase() {
  return (
    <section className="showcase" id="app">
      <header className="showcase__intro container">
        <div className="showcase__eyebrow">
          <span>04</span>
          <span>—</span>
          <span>see the whole app</span>
        </div>
        <h2 className="showcase__headline">
          Four screens. <br />
          <em>One obsession.</em>
        </h2>
        <p className="showcase__lede">
          Real product screens from Ambora Social on the App Store — the same UI that ships
          on iPhone, not marketing composites.
        </p>
      </header>

      <div className="showcase__grid container" role="region" aria-label="App screens">
        {screens.map((s, i) => (
          <figure className="showcase__card" key={s.label}>
            <DeviceShot src={s.src} alt={s.alt} label={s.label} />
            <figcaption className="showcase__caption">
              <span className="showcase__idx">0{i + 1}</span>
              <span className="showcase__label">{s.label}</span>
              <span className="showcase__sub">{s.sub}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
