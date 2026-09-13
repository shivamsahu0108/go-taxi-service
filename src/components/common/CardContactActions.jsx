import { MessageCircle, Phone } from 'lucide-react';
import { DISPLAY_PHONE } from '../../config/contact';
import { getWhatsAppLink } from '../../utils/booking';

export default function CardContactActions({ message, className = '' }) {
  const phoneHref = `tel:${DISPLAY_PHONE.replace(/\s/g, '')}`;
  const whatsappHref = getWhatsAppLink(null, message);

  return (
    <div className={`card-contact-actions ${className}`}>
      <a className="card-call-button" href={phoneHref}>
        <Phone size={16} />
        <span>Call</span>
      </a>
      <a
        className="card-whatsapp-button"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
