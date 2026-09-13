import { CalendarDays, MapPin } from 'lucide-react';
import { jabalpurPlaces } from '../../data/siteData';
import SectionHeader from '../common/SectionHeader';
import CardContactActions from '../common/CardContactActions';

export default function JabalpurPlaces() {
  return (
    <section className="section section-dark" id="jabalpur-places">
      <div className="container">
        <SectionHeader
          eyebrow="Jabalpur local sightseeing"
          title="Popular Places in Jabalpur"
          text="Explore Jabalpur's most popular tourist places with a private local taxi. Each place can be booked as a local sightseeing package directly on WhatsApp."
        />
        <div className="city-grid jabalpur-place-grid">
          {jabalpurPlaces.map((place) => (
            <PlaceCard key={place.name} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaceCard({ place }) {
  const localPackage = {
    ...place,
    name: `${place.name} Local Sightseeing Package`,
    duration: 'Half Day / Full Day',
    daysNights: '4 Hours / 8 Hours',
    price: 'Get Quote',
    highlights: 'Private cab • Flexible timing • Local sightseeing',
  };
  return (
    <article className="city-card place-card">
      <div className="place-image-wrap">
        <img
          src={place.image}
          alt={`${place.name}, Jabalpur tourist place`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <span className="place-image-badge"><MapPin size={12} /> Jabalpur</span>
      </div>
      <div className="place-card-body">
        <div className="place-topline">
          <span>{place.region}</span>
          <b>LOCAL TOUR</b>
        </div>
        <h3>{place.name}</h3>
        <p>{place.description}</p>

        <div className="place-package-meta">
          <span><CalendarDays size={14} /> 4 / 8 Hours</span>
          <span><b>Cost:</b> Get Quote</span>
        </div>

        <CardContactActions
          message={`Hello Go Taxi, I want to enquire about a local sightseeing taxi for ${place.name} in Jabalpur.`}
        />
      </div>
    </article>
  );
}
