import "./ServiceHero.css";

function ServiceHero({ service }) {
  return (
    <section className="service-hero">
      <div className="container">

        <div className="service-hero-content">

          <span className="service-badge">
            MOISRA Services
          </span>

          <h1>{service.hero.title}</h1>

          <p className="service-tagline">
            {service.tagline}
          </p>

          <p className="service-description">
            {service.hero.subtitle}
          </p>

          <div className="service-hero-actions">
            <button className="service-primary-btn">
              {service.hero.ctaText}
            </button>

            <button className="service-secondary-btn">
              Explore Services
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServiceHero;