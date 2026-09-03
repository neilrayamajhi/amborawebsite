import { CheckCircle2, ThumbsUp, ThumbsDown, MessageCircle, Plus, Home, Compass, Users, User } from 'lucide-react';
import { ScoreBadge } from '../ScoreBadge';
import './mocks.css';

export function FeedPostMock() {
  return (
    <div className="mock mock--post">
      <div className="mock__header">
        <div className="app-wordmark">ambora <span>\</span> social</div>
        <span className="mock__notif" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </span>
      </div>

      <div className="mock__tabs">
        <span className="mock__tab">Top Posts</span>
        <span className="mock__tab">For You</span>
        <span className="mock__tab mock__tab--active">Following</span>
      </div>

      <div className="phone-scroll mock__post-body">
        <div className="post-card">
          <div className="post-card__head">
            <div className="post-card__author">
              <div
                className="avatar avatar--md"
                style={{ background: 'linear-gradient(135deg, #f7b733, #fc4a1a)' }}
                aria-hidden="true"
              />
              <div>
                <div className="post-card__name">
                  Neil
                  <CheckCircle2 size={14} className="verified" fill="currentColor" stroke="#fff" strokeWidth={2.5} />
                </div>
                <div className="post-card__time">2 years ago</div>
              </div>
            </div>
            <ScoreBadge score={10.0} size={54} ring />
          </div>

          <div className="post-card__breadcrumb">
            Songs / <strong>Self Love</strong>
          </div>
          <div className="post-card__artist">MAVI</div>

          <p className="post-card__caption">
            The song that made me fall in love with hip-hop again. Everything about this record —
            the samples, the writing, the softness — feels like coming home.
          </p>

          <div
            className="post-card__media"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(120% 90% at 20% 20%, #f7b733 0%, #fc4a1a 40%, #6f2d8a 80%, #1a1a3d 100%)',
            }}
          >
            <div className="post-card__media-label">
              <span className="post-card__media-eyebrow">MAVI</span>
              <span className="post-card__media-title">Self Love</span>
            </div>
          </div>

          <div className="post-card__reactions">
            <div className="post-card__reaction"><ThumbsUp size={16} strokeWidth={2} /> <span>3</span></div>
            <div className="post-card__reaction"><ThumbsDown size={16} strokeWidth={2} /> <span>0</span></div>
            <div className="post-card__reaction"><MessageCircle size={16} strokeWidth={2} /> <span>3</span></div>
            <div className="post-card__reaction-add" aria-hidden="true"><Plus size={14} strokeWidth={2.4} /></div>
          </div>
        </div>
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
