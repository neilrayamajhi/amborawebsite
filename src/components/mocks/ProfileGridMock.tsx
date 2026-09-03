import { CheckCircle2, Home, Compass, Plus, Users, User, Settings } from 'lucide-react';
import './mocks.css';

const tiles = [
  { label: 'Albums',        count: 248, grad: 'linear-gradient(135deg, #ff6b6b, #f06595)' },
  { label: 'Movies',        count: 240, grad: 'linear-gradient(135deg, #4a5568, #1a202c)' },
  { label: 'Books',         count:  62, grad: 'linear-gradient(135deg, #d69e2e, #744210)' },
  { label: 'Meals',         count:  13, grad: 'linear-gradient(135deg, #38a169, #276749)' },
  { label: 'Anime',         count:  47, grad: 'linear-gradient(135deg, #805ad5, #322659)' },
  { label: 'Drinks',        count:  91, grad: 'linear-gradient(135deg, #ed8936, #7b341e)' },
  { label: 'Gunpla',        count:  18, grad: 'linear-gradient(135deg, #4299e1, #1a365d)' },
  { label: 'Shows',         count: 132, grad: 'linear-gradient(135deg, #f56565, #742a2a)' },
  { label: 'Places',        count:  29, grad: 'linear-gradient(135deg, #48bb78, #1c4532)' },
];

export function ProfileGridMock() {
  return (
    <div className="mock mock--profile">
      <div className="mock__header">
        <div className="app-wordmark">ambora <span>\</span> social</div>
        <Settings size={20} strokeWidth={2} />
      </div>

      <div className="profile-header">
        <div
          className="avatar avatar--lg"
          style={{ background: 'linear-gradient(135deg, #7f5af0, #2cb67d)' }}
          aria-hidden="true"
        />
        <div className="profile-header__body">
          <div className="profile-header__name">
            Neil <CheckCircle2 size={14} className="verified" fill="currentColor" stroke="#fff" strokeWidth={2.5} />
          </div>
          <div className="profile-header__stats">
            <span><strong>62</strong> Followers</span>
            <span><strong>33</strong> Following</span>
          </div>
          <p className="profile-header__bio">
            ranking things is my love language. songs, meals, midnight drives, kits.
          </p>
          <button className="btn-secondary profile-header__action">Unfollow</button>
        </div>
      </div>

      <div className="phone-scroll">
        <div className="profile-grid">
          {tiles.map((t) => (
            <div key={t.label} className="tile" style={{ background: t.grad }}>
              <span className="tile__label">{t.label}</span>
              <span className="tile__count">{t.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tab-bar">
        <div className="tab-bar__item tab-bar__item--muted"><Home size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><Compass size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item--add"><Plus size={20} strokeWidth={2.4} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><Users size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item"><User size={20} strokeWidth={2} /></div>
      </div>
    </div>
  );
}
