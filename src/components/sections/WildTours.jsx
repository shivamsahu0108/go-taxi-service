import { CalendarDays, Moon } from 'lucide-react';
import { wildTours } from '../../data/siteData';
import SectionHeader from '../common/SectionHeader';
import CardContactActions from '../common/CardContactActions';

export default function WildTours() {
  return (
    <section className="section section-soft" id="tours">
      <div className="container">
        <SectionHeader
          eyebrow="Madhya Pradesh wildlife"
          title="MP Wild Tour Packages"
          text="Easy-to-understand wildlife and nature packages from Jabalpur, with vehicle capacity matched to the group."
        />
        <div className="tour-grid">
          {wildTours.map((tour) => (
            <TourCard key={tour.name} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour }) {
  return (
    <article className="tour-card">
      <img
        src={tour.image}
        alt={`${tour.name} tour from Jabalpur`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="tour-overlay">
        <div className="tour-kicker">{tour.duration}</div>
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>

        <div className="tour-package-meta">
          <span><CalendarDays size={14} /> {tour.daysNights}</span>
          <span><b>Cost:</b> {tour.price}</span>
        </div>

        <div className="tour-bottom">
          <span>{tour.highlights}</span>
          <CardContactActions
            message={`Hello Go Taxi, I want to enquire about the ${tour.name} package from Jabalpur.`}
          />
        </div>
      </div>
    </article>
  );
}
