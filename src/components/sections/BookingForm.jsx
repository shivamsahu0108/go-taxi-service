import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Car,
  Clock3,
  MapPin,
  Navigation,
  Sparkles,
  Users,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';

import WhatsAppButton from '../common/WhatsAppButton';
import { getRecommendedVehicle, getToday } from '../../utils/booking';
import { locationOptions } from '../../data/indiaLocations';
import { fleet } from '../../data/siteData';

const passengerOptions = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  16,
  20,
  26,
  32,
  40,
  52,
];

const popularDropLocations = [
  'Jabalpur Railway Station, Madhya Pradesh',
  'Jabalpur Airport (Dumna Airport), Madhya Pradesh',
  'Madan Mahal Railway Station, Madhya Pradesh',
  'Bhedaghat, Madhya Pradesh',
  'Kanha National Park, Madhya Pradesh',
  'Bandhavgarh National Park, Madhya Pradesh',
  'Pachmarhi, Madhya Pradesh',
  'Amarkantak, Madhya Pradesh',
  'Khajuraho, Madhya Pradesh',
  'Panna National Park, Madhya Pradesh',
  'Ujjain, Madhya Pradesh',
  'Omkareshwar, Madhya Pradesh',
];

const pickupOptions = [
  ...popularDropLocations,
  ...locationOptions,
].filter((value, index, array) => {
  return array.indexOf(value) === index;
}).sort((a, b) => a.localeCompare(b));

export default function BookingForm({
  selectedVehicle,
  bookingDraft,
  onBookingChange,
}) {
  const today = getToday();

  const [form, setForm] = useState({
    pickup:
      bookingDraft?.pickup ||
      'Jabalpur, Madhya Pradesh',

    drop:
      bookingDraft?.drop ||
      '',

    service:
      bookingDraft?.service ||
      '',

    date:
      bookingDraft?.date ||
      today,

    time:
      bookingDraft?.time ||
      '09:00',

    passengers:
      bookingDraft?.passengers ||
      2,
  });

  const [requestedVehicle, setRequestedVehicle] = useState(
    bookingDraft?.requestedVehicle || ''
  );

  const [dropError, setDropError] = useState('');

  /*
   * Recommended vehicle is calculated from
   * passenger count.
   */
  const recommended = useMemo(() => {
    return getRecommendedVehicle(Number(form.passengers));
  }, [form.passengers]);

  /*
   * When a route/service/package sends booking data,
   * update the form.
   */
  useEffect(() => {
    if (!bookingDraft) return;

    setForm((previous) => ({
      ...previous,

      pickup:
        bookingDraft.pickup ??
        previous.pickup,

      drop:
        bookingDraft.drop ??
        previous.drop,

      service:
        bookingDraft.service ??
        previous.service,

      date:
        bookingDraft.date ??
        previous.date,

      time:
        bookingDraft.time ??
        previous.time,

      passengers:
        bookingDraft.passengers ??
        previous.passengers,
    }));

    if (bookingDraft.requestedVehicle !== undefined) {
      setRequestedVehicle(
        bookingDraft.requestedVehicle
      );
    }
  }, [
    bookingDraft?.pickup,
    bookingDraft?.drop,
    bookingDraft?.service,
    bookingDraft?.date,
    bookingDraft?.time,
    bookingDraft?.passengers,
    bookingDraft?.requestedVehicle,
  ]);

  /*
   * When user selects a vehicle from Fleet,
   * only the vehicle name changes.
   *
   * Passenger count is NOT changed automatically.
   */
  useEffect(() => {
    if (!selectedVehicle) return;

    setRequestedVehicle(
      selectedVehicle.name
    );

    if (onBookingChange) {
      onBookingChange({
        requestedVehicle:
          selectedVehicle.name,
      });
    }
  }, [selectedVehicle, onBookingChange]);

  /*
   * Update a single booking field.
   */
  const update = (key, value) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (key === 'drop') {
      setDropError('');
    }

    if (
      [
        'pickup',
        'drop',
        'service',
        'date',
        'time',
        'passengers',
      ].includes(key)
    ) {
      if (onBookingChange) {
        onBookingChange({
          [key]: value,
        });
      }
    }
  };

  /*
   * If user manually selects/removes vehicle.
   */
  const updateVehicle = (vehicleName) => {
    setRequestedVehicle(vehicleName);

    if (onBookingChange) {
      onBookingChange({
        requestedVehicle: vehicleName,
      });
    }
  };

  /*
   * Vehicle that will actually appear in WhatsApp.
   */
  const finalVehicle =
    requestedVehicle || recommended;

  const activeVehicle =
    fleet.find((vehicle) => vehicle.name === requestedVehicle) ||
    selectedVehicle ||
    fleet.find((vehicle) => vehicle.name === recommended);

  /*
   * Convert passenger count to number.
   */
  const passengerCount = Number(
    form.passengers || 1
  );

  /*
   * Check whether manually selected vehicle
   * can accommodate all passengers.
   */
  const vehicleCapacityWarning =
    activeVehicle &&
    passengerCount >
      Number(activeVehicle.seatsCount);

  /*
   * Complete booking object.
   *
   * This object is passed to WhatsAppButton.
   */
  const booking = {
    ...form,

    passengers: passengerCount,

    requestedVehicle:
      requestedVehicle || '',

    recommendedVehicle:
      recommended || '',

    selectedVehicleId:
      selectedVehicle?.id || '',
  };

  /*
   * Validate drop location before WhatsApp.
   */
  const validateDrop = () => {
    if (!form.drop.trim()) {
      setDropError(
        'Please enter or select your drop location.'
      );

      return false;
    }

    setDropError('');

    return true;
  };

  return (
    <div
      className="booking-card glass"
      id="booking"
    >
      <BookingHeader
        service={form.service}
      />

      <BookingFields
        form={form}
        today={today}
        update={update}
      />

      {dropError && (
        <div
          className="field-error"
          role="alert"
        >
          <AlertCircle size={16} />

          <span>{dropError}</span>
        </div>
      )}

      <VehicleRecommendation
        requestedVehicle={requestedVehicle}
        recommended={recommended}
        selectedVehicle={selectedVehicle}
        activeVehicle={activeVehicle}
        passengerCount={passengerCount}
        vehicleCapacityWarning={
          vehicleCapacityWarning
        }
        onSelectVehicle={updateVehicle}
      />

      {selectedVehicle && (
        <button
          type="button"
          className="change-vehicle-btn"
          onClick={() =>
            updateVehicle('')
          }
        >
          Use recommended vehicle instead
        </button>
      )}

      <WhatsAppButton
        booking={booking}
        className="book-main"
        ariaLabel="Book this taxi on WhatsApp"
        onClick={(event) => {
          if (!validateDrop()) {
            event.preventDefault();
          }
        }}
      >
        <span>
          Book on WhatsApp
        </span>

        <ArrowRight size={18} />
      </WhatsAppButton>

      <p className="form-note">
        Search and select an Indian city with
        its state in Pickup or Drop. WhatsApp
        receives the exact locations, date,
        time, passengers and vehicle.
      </p>
    </div>
  );
}


/*
|--------------------------------------------------------------------------
| Booking Header
|--------------------------------------------------------------------------
*/

function BookingHeader({ service }) {
  return (
    <div className="booking-heading">
      <div>
        <span className="eyebrow">
          <Sparkles size={14} />

          Fast WhatsApp Booking
        </span>

        <h2>
          Plan your ride in 30 seconds
        </h2>

        {service && (
          <div className="selected-service">
            Service:{' '}
            <strong>
              {service}
            </strong>
          </div>
        )}
      </div>

      <div className="live-dot">
        <span />
        24/7
      </div>
    </div>
  );
}


/*
|--------------------------------------------------------------------------
| Booking Fields
|--------------------------------------------------------------------------
*/

function BookingFields({
  form,
  today,
  update,
}) {
  return (
    <div className="form-grid">

      {/* PICKUP */}
      <BookingField
        icon={MapPin}
        label="Pickup location"
      >
        <LocationInput
          value={form.pickup}
          onChange={(value) => update('pickup', value)}
          placeholder="Search city, airport, station…"
        />
      </BookingField>


      {/* DROP */}
      <BookingField
        icon={Navigation}
        label="Drop location"
      >
        <LocationInput
          value={form.drop}
          onChange={(value) => update('drop', value)}
          placeholder="Search any city / state…"
          required
        />
      </BookingField>


      {/* DATE */}
      <BookingField
        icon={CalendarDays}
        label="Date"
      >
        <input
          type="date"
          min={today}
          value={form.date}
          onChange={(event) =>
            update(
              'date',
              event.target.value
            )
          }
        />
      </BookingField>


      {/* TIME */}
      <BookingField
        icon={Clock3}
        label="Time"
      >
        <input
          type="time"
          value={form.time}
          onChange={(event) =>
            update(
              'time',
              event.target.value
            )
          }
        />
      </BookingField>


      {/* PASSENGERS */}
      <BookingField
        icon={Users}
        label="Passengers"
      >
        <select
          value={form.passengers}
          onChange={(event) =>
            update(
              'passengers',
              Number(
                event.target.value
              )
            )
          }
        >
          {passengerOptions.map(
            (number) => (
              <option
                key={number}
                value={number}
              >
                {number} passengers
              </option>
            )
          )}
        </select>
      </BookingField>

    </div>
  );
}


/*
|--------------------------------------------------------------------------
| Vehicle Recommendation
|--------------------------------------------------------------------------
*/

function VehicleRecommendation({
  requestedVehicle,
  recommended,
  selectedVehicle,
  activeVehicle,
  passengerCount,
  vehicleCapacityWarning,
  onSelectVehicle,
}) {
  const [vehicleMenuOpen, setVehicleMenuOpen] = useState(false);
  const activeVehicleName = requestedVehicle || recommended;

  const chooseVehicle = (vehicleName) => {
    onSelectVehicle(vehicleName);
    setVehicleMenuOpen(false);
  };

  return (
    <div className="recommend-box">

      <div className="recommend-heading">
        <div>
          <span className="recommend-kicker">
            <Car size={14} />
            {requestedVehicle ? 'Selected vehicle' : 'Recommended vehicle'}
          </span>
          <strong>Choose the vehicle for your trip</strong>
        </div>
        <span className="recommend-status">
          {requestedVehicle ? 'Your choice' : 'Auto-matched'}
        </span>
      </div>

      <div className="recommend-select-wrap">
        <button
          type="button"
          className="recommend-select"
          onClick={() => setVehicleMenuOpen((open) => !open)}
          aria-label="Choose vehicle"
          aria-expanded={vehicleMenuOpen}
          aria-haspopup="listbox"
        >
          <span>{activeVehicleName} - {activeVehicle?.seat}</span>
          <ChevronDown size={17} />
        </button>

        {vehicleMenuOpen && (
          <div className="recommend-options" role="listbox" aria-label="Available vehicles">
            {fleet.map((vehicle) => (
              <button
                type="button"
                role="option"
                aria-selected={vehicle.name === activeVehicleName}
                className={vehicle.name === activeVehicleName ? 'is-selected' : ''}
                key={vehicle.id}
                onClick={() => chooseVehicle(vehicle.name)}
              >
                <span>{vehicle.name}</span>
                <small>{vehicle.seat}</small>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="recommend-details">
        <span>{activeVehicle?.seat || 'Vehicle capacity'}</span>
        <span>{activeVehicle?.bags || 'Luggage space'}</span>
        <small>{requestedVehicle ? 'Selected from fleet' : 'Based on passenger count'}</small>
      </div>

      {vehicleCapacityWarning && (
        <div className="vehicle-warning">
          <AlertCircle size={15} />

          <span>
            {activeVehicle.name}
            {' '}supports up to{' '}
            {activeVehicle.seatsCount}
            {' '}passengers, but you selected{' '}
            {passengerCount}.
          </span>
        </div>
      )}

    </div>
  );
}


/*
|--------------------------------------------------------------------------
| Reusable Booking Field
|--------------------------------------------------------------------------
*/

function BookingField({
  icon: Icon,
  label,
  children,
}) {
  return (
    <label className="booking-field">
      <span className="booking-field-label">
        <Icon size={16} />

        {label}
      </span>

      {children}
    </label>
  );
}

function LocationInput({ value, onChange, placeholder, required = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const query = value.trim().toLowerCase();
  const suggestions = pickupOptions
    .filter((location) => !query || location.toLowerCase().includes(query))
    .slice(0, 8);

  return (
    <div className="location-input-wrap">
      <input
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        role="combobox"
        aria-expanded={isOpen}
        aria-autocomplete="list"
      />
      {isOpen && suggestions.length > 0 && (
        <div className="location-suggestions" role="listbox" aria-label="Matching locations">
          {suggestions.map((location) => (
            <button
              key={location}
              type="button"
              role="option"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                onChange(location);
                setIsOpen(false);
              }}
            >
              {location}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}