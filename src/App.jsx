import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import AboutUs from './components/sections/AboutUs';
import JabalpurPlaces from './components/sections/JabalpurPlaces';
import Fleet from './components/sections/Fleet';
import Routes from './components/sections/Routes';
import WildTours from './components/sections/WildTours';
import Categories from './components/sections/Categories';
import Cities from './components/sections/Cities';
import ContactUs from './components/sections/ContactUs';
import FAQ from './components/sections/FAQ';
import CallButton from './components/common/CallButton';
import WhatsAppButton from './components/common/WhatsAppButton';
import { useState } from 'react';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingDraft, setBookingDraft] = useState({
    pickup: 'Jabalpur, Madhya Pradesh',
    drop: '',
    service: '',
    passengers: 2,
  });

  const updateBookingDraft = (changes) => {
    setBookingDraft(prev => ({ ...prev, ...changes }));
  };

  const chooseService = (serviceData) => {
    updateBookingDraft(serviceData);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const chooseVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const chooseRoute = (route) => {
    updateBookingDraft({ pickup: route.from, drop: route.to });
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return <>
    <Navbar />
    <main>
      <Hero
        selectedVehicle={selectedVehicle}
        bookingDraft={bookingDraft}
        onBookingChange={updateBookingDraft}
      />
      <Services onSelectService={chooseService} />
      <AboutUs />
      
      <JabalpurPlaces />
      <Fleet onSelectVehicle={chooseVehicle} />
      <Routes onSelectRoute={chooseRoute} />
      <WildTours />
      <Categories />
      <Cities />
      <FAQ />
      <ContactUs />
    </main>
    <Footer />
    <CallButton />
    <WhatsAppButton
      className="floating-whatsapp-button"
      ariaLabel="WhatsApp Go Taxi for booking enquiries"
      message="Hello Go Taxi, I would like to enquire about taxi booking in Jabalpur."
    />
  </>;
}
