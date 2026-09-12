import { Clock3, Mail, MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS, BUSINESS_EMAIL, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../../config/contact';

const address = BUSINESS.address;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Go Taxi Jabalpur Civil Lines Railway Station Road Jabalpur Madhya Pradesh 482001')}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent('Civil Lines Railway Station Road, Jabalpur, Madhya Pradesh 482001')}&output=embed`;

export default function ContactUs() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Go Taxi, I would like to enquire about taxi booking in Jabalpur.')}`;

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact Go Taxi</span>
          <h2>Book with a local Jabalpur taxi team</h2>
          <p>Call, WhatsApp or visit our listed location for airport transfers, local sightseeing, outstation cabs and group travel.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-details-card">
            <div className="contact-profile">
              <img className="contact-logo" src="/images/logo.png" alt="Go Taxi Service" />
              <div>
                <span className="contact-business-type">Taxi service & car rental</span>
                <h3>Go Taxi Service</h3>
                <p>24/7 local, airport and outstation travel support.</p>
              </div>
            </div>

            <div className="contact-items">
              <a href={`tel:${DISPLAY_PHONE.replace(/\s/g, '')}`}>
                <span className="contact-icon"><Phone size={18} /></span>
                <span><b>Call us</b><small>{DISPLAY_PHONE}</small></span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <span className="contact-icon contact-icon-green"><MessageCircle size={18} /></span>
                <span><b>WhatsApp</b><small>Quick booking & enquiries</small></span>
              </a>
              <a href={`mailto:${BUSINESS_EMAIL}`}>
                <span className="contact-icon"><Mail size={18} /></span>
                <span><b>Email</b><small>jabalpurtaxigo@gmail.com</small></span>
              </a>
              <div className="contact-static">
                <span className="contact-icon"><MapPin size={18} /></span>
                <span><b>Location</b><small>{address}</small></span>
              </div>
              <div className="contact-static">
                <span className="contact-icon"><Clock3 size={18} /></span>
                <span><b>Business hours</b><small>Open 24 hours · Monday to Sunday</small></span>
              </div>
            </div>

            <div className="contact-actions">
              <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> WhatsApp us
              </a>
              <a className="btn btn-dark" href={mapsUrl} target="_blank" rel="noreferrer">
                <Navigation size={17} /> Get directions
              </a>
            </div>
          </div>

          <div className="contact-map-card">
            <div className="contact-map-header">
              <div>
                <span className="eyebrow">Business location</span>
                <h3>Go Taxi Service</h3>
              </div>
              <a href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Open Go Taxi Jabalpur in Google Maps">
                <Navigation size={17} /> Maps
              </a>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="Go Taxi Jabalpur location map"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-map-caption">
              <MapPin size={16} />
              <span>{address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
