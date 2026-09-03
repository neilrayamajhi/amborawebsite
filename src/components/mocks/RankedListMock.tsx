import { Search, BarChart3, Bookmark, MoreVertical, Home, Compass, Plus, Users, User } from 'lucide-react';
import { ScoreBadge } from '../ScoreBadge';
import './mocks.css';

const songs = [
  { rank: 1,  title: 'Self Love',       artist: 'MAVI',              score: 10.0, hue: 285 },
  { rank: 2,  title: 'Kinky Love',      artist: 'Pale Saints',       score: 10.0, hue: 205 },
  { rank: 3,  title: 'Everybody Wants…',artist: 'Japanese Breakfast',score: 10.0, hue: 355 },
  { rank: 4,  title: 'Nowhere2go',      artist: 'Earl Sweatshirt',   score:  9.9, hue: 45  },
  { rank: 5,  title: 'A Song For You',  artist: 'Donny Hathaway',    score:  9.7, hue: 25  },
];

export function RankedListMock() {
  return (
    <div className="mock mock--list">
      <div className="mock__header">
        <div className="app-wordmark">ambora <span>\</span> social</div>
        <div className="mock__header-icons">
          <span className="mock__notif" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </span>
        </div>
      </div>

      <div className="mock__list-title">
        <h4 className="mock__title-italic">Songs</h4>
        <p className="mock__subtitle">My favorite songs throughout time!</p>
      </div>

      <div className="mock__toolrow">
        <div className="mock__toolicons">
          <BarChart3 size={18} strokeWidth={2.2} />
          <Bookmark size={18} strokeWidth={2.2} className="mock__tool--muted" />
        </div>
        <div className="search-pill mock__search">
          <Search size={14} strokeWidth={2.4} />
          <input placeholder="Search Items..." readOnly />
        </div>
      </div>

      <div className="phone-scroll mock__rows">
        {songs.map((s) => (
          <div className="rank-row" key={s.rank}>
            <div className="rank-row__num">#{s.rank}</div>
            <div
              className="rank-row__thumb"
              style={{ background: `linear-gradient(135deg, hsl(${s.hue}, 60%, 62%), hsl(${(s.hue + 30) % 360}, 70%, 42%))` }}
              aria-hidden="true"
            />
            <div className="rank-row__body">
              <div className="rank-row__title">{s.title}</div>
              <div className="rank-row__meta">
                <em>{s.artist}</em>
                <span className="rank-row__dot">·</span>
                <span className="rank-row__note">a moment</span>
              </div>
            </div>
            <ScoreBadge score={s.score} size={36} />
            <MoreVertical size={14} strokeWidth={2} className="rank-row__more" />
          </div>
        ))}
      </div>

      <div className="tab-bar">
        <div className="tab-bar__item"><Home size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><Compass size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item--add"><Plus size={20} strokeWidth={2.4} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><Users size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><User size={20} strokeWidth={2} /></div>
      </div>
    </div>
  );
}
