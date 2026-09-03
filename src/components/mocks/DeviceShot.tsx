import './device-shot.css';

interface DeviceShotProps {
  src: string;
  alt: string;
  label?: string;
}

/** Full app screenshot at its native ratio — no crop, no fake notch. */
export function DeviceShot({ src, alt, label }: DeviceShotProps) {
  return (
    <figure className="device" aria-label={label}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}
