import { getWhatsAppLink } from '../../utils/booking';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
  booking,
  message,
  children,
  className = '',
  onClick,
  ariaLabel = 'WhatsApp Go Taxi booking',
}) {
  const whatsappLink = getWhatsAppLink(booking, message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={onClick}
    >
      {children || <><MessageCircle size={16} /><span>WhatsApp</span></>}
    </a>
  );
}