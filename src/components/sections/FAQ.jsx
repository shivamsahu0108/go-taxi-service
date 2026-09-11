import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const faqs = [
  {
    q: 'What taxi services does Go Taxi provide in Jabalpur?',
    a: 'Go Taxi provides local Jabalpur taxi trips, Dumna Airport transfers, railway station pickup and drop, outstation one-way and round trips, sightseeing, wedding transport and group travel.',
  },
  {
    q: 'Can I book a taxi from Jabalpur to another city?',
    a: 'Yes. Go Taxi handles outstation travel from Jabalpur to destinations across Madhya Pradesh and other parts of India, subject to vehicle and driver availability.',
  },
  {
    q: 'Do you provide Jabalpur airport pickup and drop?',
    a: 'Yes. You can request pickup or drop service for Jabalpur Airport (Dumna Airport) and share your flight timing while booking.',
  },
  {
    q: 'Which vehicles are available?',
    a: 'Vehicle options include sedans, Ertiga, Innova Crysta, Tempo Traveller, Force Urbania and larger buses for group travel. The suitable vehicle depends on your passenger and luggage requirements.',
  },
  {
    q: 'How can I book a Go Taxi?',
    a: 'You can use the booking form on this website, call the listed phone number, or send your trip details on WhatsApp for confirmation.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section-soft" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="Frequently asked questions"
          title="Jabalpur taxi booking FAQs"
          text="Quick answers about local cabs, airport transfers, outstation trips and group travel."
        />
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
                <div id={`faq-answer-${index}`} className="faq-answer" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
