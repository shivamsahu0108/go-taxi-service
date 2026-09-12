import { getWhatsAppLink } from '../../utils/booking';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
  booking,
  message,
  children,
  className = '',
  onClick,
}) {
  const whatsappLink = getWhatsAppLink(booking, message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
      aria-label="WhatsApp Go Taxi"
      title="WhatsApp Go Taxi"
      onClick={onClick}
    >
      {children || <><MessageCircle size={16} /><span>WhatsApp</span></>}
    </a>
  );
}