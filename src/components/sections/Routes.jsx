import { useState } from "react";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { routes } from "../../data/siteData";
import SectionHeader from "../common/SectionHeader";
import CardContactActions from "../common/CardContactActions";

export default function Routes({ onSelectRoute }) {
  const [query, setQuery] = useState("");

  const filtered = routes.filter((route) =>
    `${route.from} ${route.to} ${route.category}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <section className="section" id="routes">
      <div className="container">
        <SectionHeader
          eyebrow="Popular journeys"
          title="Popular Jabalpur taxi routes"
          text="Book comfortable cabs from Jabalpur to popular destinations across Madhya Pradesh and beyond."
        />

        <RouteTools
          query={query}
          onChange={setQuery}
          resultCount={filtered.length}
        />

        <div className="route-grid">
          {filtered.map((route) => (
            <RouteCard
              key={`${route.from}-${route.to}`}
              route={route}
              onSelectRoute={onSelectRoute}
            />
          ))}
        </div>

        {!filtered.length && (
          <div className="empty-state">
            <Search size={22} />

            <strong>No matching route found</strong>

            <p>Try searching Kanha, Ujjain, Khajuraho or Bhopal.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Search / Tools
|--------------------------------------------------------------------------
*/

function RouteTools({ query, onChange, resultCount }) {
  return (
    <div className="route-tools">
      <div className="searchbox">
        <Search size={18} />

        <input
          value={query}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search destination, e.g. Ujjain or Kanha"
          aria-label="Search taxi routes"
        />

        {query && (
          <button
            type="button"
            className="search-clear"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <div className="route-tools-right">
        <div className="route-result">{resultCount} routes</div>

        <div className="route-note">
          <ShieldCheck size={16} />
          Fare confirmed on WhatsApp
        </div>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Route Card
|--------------------------------------------------------------------------
*/

function RouteCard({ route, onSelectRoute }) {
  return (
    <article className="route-card">
      {/* =========================================================
          IMAGE / HERO
      ========================================================= */}
      <div className="route-card-image">
        <img
          src={route.image}
          alt={route.imageAlt || `${route.from} to ${route.to} taxi`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {!route.image && (
          <div className="route-image-fallback">
            <MapPin size={30} />
            <span>{route.to}</span>
          </div>
        )}

        <div className="route-image-overlay" />

        {/* TOP LABELS */}
        <div className="route-card-top">
          <span className="route-category">{route.category}</span>

          {route.badge && (
            <span className="route-badge">
              <Sparkles size={12} />
              {route.badge}
            </span>
          )}
        </div>

        {/* DESTINATION */}
        <div className="route-image-destination">
          <span className="destination-label">TAXI FROM JABALPUR</span>

          <h3>{route.to}</h3>
        </div>

        {route.credit && (
          <span className="route-image-credit">{route.credit}</span>
        )}
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="route-card-content">
        {/* ROUTE */}
        <div className="route-path">
          <div className="route-point">
            <div className="route-point-icon pickup">
              <span />
            </div>

            <div className="route-point-content">
              <span>Pickup</span>
              <strong>{route.from}</strong>
            </div>
          </div>

          <div className="route-path-line">
            <div className="route-path-line-inner" />
            <div className="route-arrow">
              <ArrowRight size={15} />
            </div>
          </div>

          <div className="route-point">
            <div className="route-point-icon ">
              <span />
            </div>

            <div className="route-point-content">
              <span>Destination</span>
              <strong>{route.to}</strong>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        {route.description && (
          <p className="route-description">{route.description}</p>
        )}

        {/* =====================================================
            QUICK STATS
        ===================================================== */}
        <div className="route-stats">
          <div className="route-stat">
            <div className="route-stat-icon">
              <Clock3 size={17} />
            </div>

            <div>
              <span>Journey</span>
              <strong>{route.time}</strong>
            </div>
          </div>

          <div className="route-stat-divider" />

          <div className="route-stat">
            <div className="route-stat-icon">
              <Car size={17} />
            </div>

            <div>
              <span>Cab Type</span>
              <strong>{route.car}</strong>
            </div>
          </div>
        </div>

        {/* =====================================================
            BENEFITS
        ===================================================== */}
        <div className="route-benefits">
          <span>
            <CheckCircle2 size={14} />
            AC Cab
          </span>

          <span>
            <CheckCircle2 size={14} />
            Verified Driver
          </span>

          <span>
            <CheckCircle2 size={14} />
            Door-to-Door
          </span>
        </div>

        {/* =====================================================
            FOOTER / CTA
        ===================================================== */}
        <div className="route-card-footer">
          <div className="route-secure">
            <ShieldCheck size={17} />

            <div>
              <strong>Easy booking</strong>
              <span>Confirm on WhatsApp</span>
            </div>
          </div>

          <CardContactActions
            message={`Hello Go Taxi, I want to enquire about a taxi from ${route.from} to ${route.to}.`}
          />
        </div>
      </div>
    </article>
  );
}
