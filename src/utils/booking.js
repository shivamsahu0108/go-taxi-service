import { WHATSAPP_NUMBER } from '../config/contact';
import { fleet } from '../data/siteData';

export function getRecommendedVehicle(passengers) {
  const people = Number(passengers || 1);

  // Find the first vehicle that can accommodate
  // the selected number of passengers.
  const vehicle = fleet.find(
    (car) => Number(car.seatsCount) >= people
  );

  return vehicle?.name || 'Vehicle to be confirmed';
}


export function buildWhatsAppMessage(booking) {
  const people = Number(
    booking.passengers || 1
  );

  /*
   * If the customer selected a specific cab,
   * use that cab.
   *
   * Otherwise recommend one automatically
   * from the current fleet.
   */
  const vehicle =
    booking.requestedVehicle ||
    getRecommendedVehicle(people);

  return [
    'Hello Go Taxi, I would like to book a taxi.',
    '',
    `Service: ${booking.service || 'Taxi Booking'}`,
    `Pickup: ${booking.pickup || '-'}`,
    `Drop: ${booking.drop || '-'}`,
    `Date: ${booking.date || '-'}`,
    `Time: ${booking.time || '-'}`,
    `Passengers: ${people}`,
    `Vehicle: ${vehicle}`,
    '',
    'Please share availability, fare and driver details.'
  ].join('\n');
}


export function buildPackageWhatsAppMessage(pkg) {
  return [
    'Hello Go Taxi, I would like to enquire about this travel package.',
    '',
    `Package: ${pkg.name || '-'}`,
    `Duration: ${pkg.duration || '-'}`,
    `Days / Nights: ${pkg.daysNights || '-'}`,
    `Package Cost: ${
      pkg.price ||
      'Please share the current package price.'
    }`,
    `Highlights: ${pkg.highlights || '-'}`,
    '',
    'Please confirm availability, exact fare, inclusions, vehicle options and booking details.'
  ].join('\n');
}


export function getWhatsAppLink(booking, message) {
  if (message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const defaultMessage = buildWhatsAppMessage(
    booking || {
      pickup: 'Jabalpur',
      drop: '',
      date: '',
      time: '',
      passengers: 2
    }
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    defaultMessage
  )}`;
}


export function getPackageWhatsAppLink(pkg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildPackageWhatsAppMessage(pkg)
  )}`;
}


export function getToday() {
  return new Date()
    .toISOString()
    .split('T')[0];
}