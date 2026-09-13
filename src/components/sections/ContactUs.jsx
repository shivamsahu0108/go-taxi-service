import { Clock3, Mail, MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS, BUSINESS_EMAIL, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../../config/contact';

const address = BUSINESS.address;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Go Taxi Jabalpur Civil Lines Railway Station Road Jabalpur Madhya Pradesh 482001')}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent('Civil Lines Railway Station Road, Jabalpur, Madhya Pradesh 482001')}&output=embed`;

export default function ContactUs() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Go Taxi, I would like to enquire about taxi booking in Jabalpur.')}`;
  const phoneHref = `tel:${DISPLAY_PHONE.replace(/\s/g, '')}`;
  const emailHref = `mailto:${BUSINESS_EMAIL}`;

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
              <img className="contact-logo" src="/images/logo.webp" alt="Go Taxi Service" width="72" height="72" />
              <div>
                <span className="contact-business-type">Taxi service & car rental</span>
                <h3>Go Taxi Service</h3>
                <p>24/7 local, airport and outstation travel support.</p>
              </div>
            </div>

            <div className="contact-items">
              <ContactMethod href={phoneHref} icon={Phone} label="Call us" detail={DISPLAY_PHONE} />
              <ContactMethod href={whatsappHref} icon={MessageCircle} label="WhatsApp" detail="Quick booking & enquiries" accent external />
              <ContactMethod href={emailHref} icon={Mail} label="Email" detail={BUSINESS_EMAIL} />
              <ContactMethod icon={MapPin} label="Location" detail={address} />
              <ContactMethod icon={Clock3} label="Business hours" detail="Open 24 hours · Monday to Sunday" />
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

function ContactMethod({ href, icon: Icon, label, detail, accent = false, external = false }) {
  const content = (
    <>
      <span className={`contact-icon${accent ? ' contact-icon-green' : ''}`}><Icon size={18} /></span>
      <span><b>{label}</b><small>{detail}</small></span>
    </>
  );

  if (!href) {
    return <div className="contact-static">{content}</div>;
  }

  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{content}</a>;
}
