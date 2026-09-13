import {
  BusFront,
  MapPin,
  Plane,
  Route
} from 'lucide-react';

import SectionHeader from '../common/SectionHeader';
import CardContactActions from '../common/CardContactActions';

const items = [
  {
    id: 'airport',
    title: 'Airport & Railway Pickup',
    desc: 'Dumna Airport (JLR), Jabalpur Junction and local station transfers.',
    Icon: Plane,
    image: '/images/service/Dumna.webp',
    data: {
      service: 'Airport & Railway Pickup',
      pickup:
        'Jabalpur Airport (Dumna Airport), Madhya Pradesh',
      drop: ''
    }
  },

  {
    id: 'local',
    title: 'Local Jabalpur Sightseeing',
    desc: 'Bhedaghat, Marble Rocks, Dhuandhar Falls, Bargi Dam and city trips.',
    Icon: MapPin,
    image: '/images/service/Jabalpur-Sightseeing.webp',
    data: {
      service: 'Local Jabalpur Sightseeing',
      pickup: 'Jabalpur, Madhya Pradesh',
      drop: 'Bhedaghat, Madhya Pradesh'
    }
  },

  {
    id: 'outstation',
    title: 'Outstation Taxi',
    desc: 'One-way and round-trip cab options across Madhya Pradesh and beyond.',
    Icon: Route,
    image: '/images/service/outstation-taxi.webp',
    data: {
      service: 'Outstation Taxi',
      pickup: 'Jabalpur, Madhya Pradesh',
      drop: ''
    }
  },

  {
    id: 'wedding',
    title: 'Wedding & Group Travel',
    desc: 'SUVs, luxury cars, Tempo Travellers and 26/52-seat buses for events.',
    Icon: BusFront,
    image: '/images/service/Wedding-Group-Travel.webp',
    data: {
      service: 'Wedding & Group Travel',
      pickup: 'Jabalpur, Madhya Pradesh',
      drop: '',
      passengers: 26
    }
  }
];

export default function Services({
  onSelectService
}) {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="container">

        <SectionHeader
          eyebrow="Core services"
          title="Everything you need from a Jabalpur cab service"
          text="Designed around high-intent services customers search for when they need a dependable local taxi."
        />

        <div className="service-grid">
          {items.map((item) => (
            <ServiceCard
              key={item.id}
              {...item}
              onSelectService={
                onSelectService
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}


function ServiceCard({
  title,
  desc,
  Icon,
  image,
  data,
  onSelectService
}) {
  return (
    <article className="service-card">

      {/* Service Image */}
      <div className="service-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <div className="service-image-icon">
          <Icon size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="service-card-content">

        <h3>{title}</h3>

        <p>{desc}</p>

        <CardContactActions
          message={`Hello Go Taxi, I want to enquire about ${title} in Jabalpur.`}
        />

      </div>

    </article>
  );
}