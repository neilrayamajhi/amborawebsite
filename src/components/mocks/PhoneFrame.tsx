import type { ReactNode } from 'react';
import './phone-frame.css';

interface PhoneFrameProps {
  children: ReactNode;
  label?: string;
  variant?: 'light' | 'dark';
  /** hide the fake status bar (use when the child image already contains one) */
  bare?: boolean;
}

export function PhoneFrame({ children, label, variant = 'light', bare = false }: PhoneFrameProps) {
  return (
    <div className={`phone-frame phone-frame--${variant} ${bare ? 'phone-frame--bare' : ''}`} aria-label={label ?? 'App screen mockup'}>
      <div className="phone-frame__bezel">
        <div className="phone-frame__notch" aria-hidden="true" />
        <div className="phone-frame__screen">
          {!bare && (
            <div className="phone-frame__statusbar" aria-hidden="true">
              <span className="phone-frame__time">9:41</span>
              <span className="phone-frame__statusicons">
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none">
                  <rect x="0" y="6" width="3" height="4" fill="currentColor" />
                  <rect x="4" y="4" width="3" height="6" fill="currentColor" />
                  <rect x="8" y="2" width="3" height="8" fill="currentColor" />
                  <rect x="12" y="0" width="3" height="10" fill="currentColor" />
                </svg>
                <span className="phone-frame__battery" />
              </span>
            </div>
          )}
          <div className="phone-frame__content">{children}</div>
        </div>
      </div>
    </div>
  );
}
