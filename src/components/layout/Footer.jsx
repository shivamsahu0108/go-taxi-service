import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { mpCities } from '../../data/siteData';
import { BUSINESS, BUSINESS_EMAIL, DISPLAY_PHONE, SOCIAL_LINKS, WHATSAPP_NUMBER } from '../../config/contact';

const quickLinks = [
  ['Book Taxi', '#booking'],
  ['Cars & buses', '#fleet'],
  ['Popular routes', '#routes'],
  ['MP wild tours', '#tours'],
  ['FAQs', '#faq'],
];

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

export default function Footer() {
  const phoneHref = `tel:${DISPLAY_PHONE.replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Go Taxi, I would like to enquire about taxi booking in Jabalpur.')}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`;

  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand footer-brand">
            <img className="brand-mark" src="/images/logo.webp" alt="Go Taxi Service" width="74" height="74" />
            <span>Go <b>Taxi</b> Service</span>
          </a>
          <p>Jabalpur taxi service for airport pickup, local sightseeing, outstation travel and all-India journeys.</p>
          <div className="footer-phone"><Phone size={16}/> {DISPLAY_PHONE}</div>
        </div>
        <div>
          <h4>Service areas</h4>
          <p>{mpCities.join(' · ')}</p>
        </div>
        <div className="footer-contact">
          <h4>Contact us</h4>
          <a href={phoneHref}><Phone size={15} /> <span>{DISPLAY_PHONE}</span></a>
          <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={15} /> <span>WhatsApp booking</span></a>
          <a href={`mailto:${BUSINESS_EMAIL}`}><Mail size={15} /> <span>{BUSINESS_EMAIL}</span></a>
          <a href={mapsHref} target="_blank" rel="noreferrer"><MapPin size={15} /> <span>{BUSINESS.address}</span></a>
          <div className="footer-socials" aria-label="Go Taxi social media">
            {SOCIAL_LINKS.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Go Taxi on ${label}`} title={label}>
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h4>Quick links</h4>
          {quickLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Go Taxi Service. Local taxi service in Jabalpur, Madhya Pradesh.</div>
    </footer>
  );
}
