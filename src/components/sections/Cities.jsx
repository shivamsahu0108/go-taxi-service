import { popularCities } from '../../data/siteData';
import SectionHeader from '../common/SectionHeader';
import CardContactActions from '../common/CardContactActions';

export default function Cities() {
  return <section className="section section-dark" id="cities"><div className="container"><SectionHeader eyebrow="India travel network" title="Popular Cities of India" text="Local landing pages can expand the brand beyond Jabalpur while keeping the main conversion path on WhatsApp."/><div className="city-grid">{popularCities.map(city => <CityCard key={city.name} city={city} />)}</div></div></section>;
}

function CityCard({ city }) {
  return <article className="city-card"><img src={city.image} alt={`${city.name} India travel`} loading="lazy" referrerPolicy="no-referrer"/><div><span>{city.region}</span><h3>{city.name}</h3><p>{city.description}</p><CardContactActions message={`Hello Go Taxi, I want to enquire about taxi or car rental in ${city.name}.`} /></div></article>;
}
