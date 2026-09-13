import { CheckCircle2, Clock3, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { BUSINESS, DISPLAY_PHONE, SOCIAL_LINKS } from '../../config/contact';

const highlights = [
  'Local taxi and city travel in Jabalpur',
  'Jabalpur Airport and railway station transfers',
  'One-way and round-trip outstation cabs',
  'Sedans, MPVs, vans and buses for group travel',
  'Sightseeing, wedding and event transportation',
  'Service options across Madhya Pradesh and other Indian destinations',
];

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

export default function AboutUs() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">About Go Taxi</span>
            <h2 id="about-title">Go Taxi Service</h2>
            <p className="about-lead">
              Go Taxi Service Jabalpur is a local taxi service in Jabalpur, Madhya Pradesh,
              offering Jabalpur Airport Taxi pickup and drop, railway station transfers,
              local taxi rides, outstation taxi trips and comfortable group transportation.
            </p>
            <p>
              Book a one-way taxi or round-trip cab from Jabalpur through phone or WhatsApp,
              with practical vehicle choices for individuals, families, business travellers,
              tourists, weddings and larger groups. From local rides around Jabalpur to
              longer journeys across Madhya Pradesh and other parts of India, customers can
              enquire about the vehicle and trip that fits their travel plan.
            </p>

            <div className="about-actions">
              <a className="btn btn-dark" href={`tel:${DISPLAY_PHONE.replace(/\s/g, '')}`}>
                <Phone size={17} /> Call Go Taxi
              </a>
              <a className="about-text-link" href="#contact">View contact & location →</a>
            </div>
          </div>

          <aside className="about-card" aria-label="Go Taxi business information">
            <div className="about-card-top">
              <div className="about-logo-wrap">
                <img src="/images/logo.webp" alt="" width="72" height="72" />
              </div>
              <div>
                <span className="about-card-label">Local taxi service</span>
                <h3>{BUSINESS.legalName}</h3>
                <p>Jabalpur, Madhya Pradesh</p>
              </div>
            </div>

            <div className="about-info-list">
              <div>
                <span className="about-info-icon"><MapPin size={17} /></span>
                <span><b>Based in Jabalpur</b><small>{BUSINESS.address}</small></span>
              </div>
              <div>
                <span className="about-info-icon"><Clock3 size={17} /></span>
                <span><b>Booking support</b><small>Call or WhatsApp for availability and trip enquiries</small></span>
              </div>
              <div>
                <span className="about-info-icon"><ShieldCheck size={17} /></span>
                <span><b>Travel options</b><small>Local, airport, outstation, sightseeing and group travel</small></span>
              </div>
            </div>

            {SOCIAL_LINKS.length > 0 && (
              <div className="about-socials" aria-label="Go Taxi social media">
                <span>Follow Go Taxi</span>
                <div>
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
            )}
          </aside>
        </div>

        <div className="about-highlights" aria-label="Go Taxi services and coverage">
          {highlights.map((item) => (
            <div className="about-highlight" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
