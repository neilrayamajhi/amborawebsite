import './screenshot-mock.css';

interface ScreenshotMockProps {
  src: string;
  alt: string;
}

export function ScreenshotMock({ src, alt }: ScreenshotMockProps) {
  return (
    <div className="screenshot-mock">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}
