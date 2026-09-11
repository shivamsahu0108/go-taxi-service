import { MessageCircle } from 'lucide-react';
import { phoneNumbers } from '../../data/siteData';
import SectionHeader from '../common/SectionHeader';

export default function PhoneDatabase() {
  return <section className="section section-soft"><div className="container phone-db"><div><SectionHeader eyebrow="Unified contact database" title="WhatsApp numbers" text="Duplicate-free, standardized contacts for website buttons and local-business data."/></div><div className="phone-list">{phoneNumbers.map(number => <a key={number} href={`https://wa.me/${number.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/><span>{number}</span></a>)}</div></div></section>;
}
