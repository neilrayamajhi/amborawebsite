import { Search, Home, Compass, Plus, Users, User } from 'lucide-react';
import { ScoreBadge } from '../ScoreBadge';
import './mocks.css';

export function AddRateMock() {
  return (
    <div className="mock mock--add">
      <div className="mock__header mock__header--add">
        <button className="mock__cancel">Cancel</button>
        <div className="app-wordmark">ambora <span>\</span> social</div>
        <button className="mock__addlist">+ Add List</button>
      </div>

      <div className="phone-scroll mock__add-body">
        <div className="search-pill mock__search mock__search--filled">
          <Search size={14} strokeWidth={2.4} />
          <input value="Face the World" readOnly />
        </div>

        <div className="card add-card">
          <div className="add-card__title">How was it?</div>
          <div className="add-circles">
            <div className="add-circle" style={{ background: 'var(--success)' }}>
              <span>Good</span>
            </div>
            <div className="add-circle" style={{ background: '#F5C518' }}>
              <span>Mid</span>
            </div>
            <div className="add-circle" style={{ background: 'var(--error)' }}>
              <span>Bad</span>
            </div>
          </div>
        </div>

        <div className="card add-card">
          <div className="add-card__title">Which do you prefer?</div>
          <div className="compare">
            <div className="compare__side">
              <div
                className="compare__art"
                aria-hidden="true"
                style={{ background: 'linear-gradient(135deg, #dfe4ea, #a4b0be)' }}
              >
                <span className="compare__q">?</span>
              </div>
              <div className="compare__label">Face the World</div>
              <div className="compare__sub">rate this</div>
            </div>
            <div className="compare__or">OR</div>
            <div className="compare__side">
              <div
                className="compare__art"
                aria-hidden="true"
                style={{ background: 'linear-gradient(135deg, #ffb347, #ff6961)' }}
              />
              <div className="compare__label">Bozo</div>
              <div className="compare__score"><ScoreBadge score={9.2} size={30} /></div>
            </div>
          </div>
          <div className="compare__actions">
            <button className="chip">Too Tough</button>
            <button className="chip">Skip</button>
          </div>
        </div>
      </div>

      <div className="tab-bar">
        <div className="tab-bar__item tab-bar__item--muted"><Home size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><Compass size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item--add"><Plus size={20} strokeWidth={2.4} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><Users size={20} strokeWidth={2} /></div>
        <div className="tab-bar__item tab-bar__item--muted"><User size={20} strokeWidth={2} /></div>
      </div>
    </div>
  );
}
