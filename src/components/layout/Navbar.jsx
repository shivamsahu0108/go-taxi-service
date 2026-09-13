import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import WhatsAppButton from '../common/WhatsAppButton';
import { DISPLAY_PHONE } from '../../config/contact';

const links = [
  ['Services', '#services'],
  ['About Us', '#about'],
  ['Cars', '#fleet'],
  ['Routes', '#routes'],
  ['MP Tours', '#tours'],
  ['Cities', '#cities'],
  ['FAQs', '#faq'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <a href="#top" className="brand">
          <img className="brand-mark" src="/images/logo.png" alt="Go Taxi Service" />
          <span>Go <b>Taxi</b> Service</span>
        </a>
        <nav className={menuOpen ? 'is-open' : ''}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-light" href={`tel:${DISPLAY_PHONE.replace(/\s/g, '')}`} aria-label="Call Go Taxi" title="Call Go Taxi">
            <Phone size={16}/><span>Call</span>
          </a>
          <WhatsAppButton
            className="btn-sm"
            message="Hello Go Taxi Jabalpur, I need a van taxi for family or group travel around Jabalpur or for an outstation journey. Please share vehicle availability, fare and booking details."
          />
        </div>
        <button
          className="nav-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
