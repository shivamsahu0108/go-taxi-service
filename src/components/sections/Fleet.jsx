import { CheckCircle2, Luggage, Users } from 'lucide-react';
import { fleet } from '../../data/siteData';
import SectionHeader from '../common/SectionHeader';
import CardContactActions from '../common/CardContactActions';

export default function Fleet({ onSelectVehicle }) {
  return (
    <section className="section section-dark" id="fleet">
      <div className="container">
        <SectionHeader
          eyebrow="Fleet & capacity"
          title="Choose the right vehicle for your journey"
          text="Real fleet options, clear passenger capacity and one-click WhatsApp booking."
        />
        <div className="fleet-grid">
          {fleet.map(vehicle => (
            <CarCard key={vehicle.id} vehicle={vehicle} onSelectVehicle={onSelectVehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarCard({ vehicle, onSelectVehicle }) {
  const selectVehicle = () => onSelectVehicle?.(vehicle);

  return (
    <article className="car-card" id={`fleet-${vehicle.id}`}>
      <div className="car-img-wrap">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} taxi rental in Jabalpur`}
          loading="lazy"
          onError={(event) => {
            if (vehicle.poster && event.currentTarget.src !== new URL(vehicle.poster, window.location.origin).href) {
              event.currentTarget.src = vehicle.poster;
            }
          }}
        />
        <div className="seat-pill"><Users size={13} /> {vehicle.seat}</div>
      </div>

      <div className="car-body">
        <div className="fleet-card-topline">
          <div className="car-type">{vehicle.category}</div>
          <span className="fleet-tag">{vehicle.tag}</span>
        </div>

        <h3>{vehicle.name}</h3>
        <p className="car-models">{vehicle.models}</p>
        <p>{vehicle.category} taxi for local, airport, outstation and group travel from Jabalpur.</p>

        <div className="fleet-meta">
          <span><Users size={14} /> {vehicle.seat}</span>
          <span><Luggage size={14} /> {vehicle.bags}</span>
        </div>

        <ul>
          {vehicle.features.map(feature => (
            <li key={feature}><CheckCircle2 size={14} />{feature}</li>
          ))}
        </ul>

        <CardContactActions
          message={`Hello Go Taxi, I want to enquire about a ${vehicle.name} for my trip from Jabalpur.`}
        />
      </div>
    </article>
  );
}
