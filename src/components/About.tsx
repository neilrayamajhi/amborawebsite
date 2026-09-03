import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { DeviceShot } from './mocks/DeviceShot';
import './about.css';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section className={`about${inView ? ' is-in' : ''}`} id="about" ref={ref}>
      <div className="about__sticky">
        <div className="about__glow" aria-hidden="true" />

        <div className="about__inner container">
          <div className="about__text">
            <div className="about__eyebrow">
              <span className="about__index">02</span>
              <span className="about__label">the idea</span>
            </div>

            <h2 className="about__headline">
              Do you like ranking stuff?
            </h2>

            <div className="about__copy">
              <p>
                Inspired by our “What is your Top 5?” conversations, we created
                ambora<span className="about__slash">\</span>social — a social media
                app where you can rank anything from the places you’ve visited to
                the albums you’ve listened to, and even niche things like indie
                video games or local craft beers.
              </p>
              <p>
                Not only can you share your own rankings, but you can also see and
                interact with your friends’ posts, discover their top picks, and
                discuss your different takes on things you love.
              </p>
            </div>

            <div className="about__foot">
              <div className="about__rail" />
              <span className="about__note">
                <span className="about__dot" /> live · scored 0 → 10 · one order of things
              </span>
            </div>
          </div>

          <div className="about__media">
            <DeviceShot
              src="/screens/12-profile-avi.png"
              alt="Avi Basnet’s Ambora Social profile with ranked category tiles"
              label="Avi Basnet — profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
