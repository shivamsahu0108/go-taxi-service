import { CheckCircle2, Car, Clock3, Plane, Route, ShieldCheck } from 'lucide-react';
import BookingForm from './BookingForm';

const quickRoutes = ['Jabalpur → Kanha', 'Jabalpur → Bandhavgarh', 'Jabalpur → Pachmarhi', 'Dumna Airport Pickup'];

export default function Hero({ selectedVehicle, bookingDraft, onBookingChange }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge"><ShieldCheck size={15}/> Reliable local & outstation taxi service</div>
          <h1>Taxi Service in <span>Jabalpur</span></h1>
          <p>Go Taxi provides reliable taxi and cab service in Jabalpur for airport transfers, local sightseeing, outstation trips, business travel and group journeys across Madhya Pradesh and India.</p>
          <div className="hero-points">
            <span><CheckCircle2 size={16}/> WhatsApp booking</span>
            <span><CheckCircle2 size={16}/> 24/7 pickup & drop</span>
            <span><CheckCircle2 size={16}/> Transparent trip details</span>
          </div>
          <div className="hero-quick">
            {quickRoutes.map(item => <a key={item} href="#routes"><Route size={14}/>{item}</a>)}
          </div>
        </div>
        <BookingForm selectedVehicle={selectedVehicle} bookingDraft={bookingDraft} onBookingChange={onBookingChange} />
      </div>
      <TrustStrip />
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="container trust-strip">
      <TrustItem icon={Car} title="Multiple vehicle classes" text="Sedans → SUVs → buses" />
      <TrustItem icon={Plane} title="Dumna Airport" text="Pickup & drop from Jabalpur" />
      <TrustItem icon={Clock3} title="24-hour service" text="Plan early-morning & late-night rides" />
    </div>
  );
}

function TrustItem({ icon: Icon, title, text }) {
  return <div><Icon/><div><b>{title}</b><span>{text}</span></div></div>;
}
