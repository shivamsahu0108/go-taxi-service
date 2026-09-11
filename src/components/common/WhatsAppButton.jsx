import { getWhatsAppLink } from '../../utils/booking';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
  booking,
  children,
  className = '',
  onClick,
}) {
  const whatsappLink = getWhatsAppLink(booking);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
      onClick={onClick}
    >
      {children || <><MessageCircle size={16} /><span>WhatsApp</span></>}
    </a>
  );
}