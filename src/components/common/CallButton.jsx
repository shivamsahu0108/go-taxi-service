import { Phone } from 'lucide-react';
import { DISPLAY_PHONE } from '../../config/contact';

export default function CallButton() {
  const phoneHref = `tel:${DISPLAY_PHONE.replace(/\s/g, '')}`;

  return (
    <a
      className="floating-call-button"
      href={phoneHref}
      aria-label={`Call Go Taxi at ${DISPLAY_PHONE}`}
      title={`Call Go Taxi at ${DISPLAY_PHONE}`}
    >
      <Phone size={19} aria-hidden="true" />
      <span>Call now</span>
    </a>
  );
}