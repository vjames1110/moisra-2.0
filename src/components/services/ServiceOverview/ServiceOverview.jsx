import SectionHeading from "../../common/SectionHeading/SectionHeading";

import "./ServiceOverview.css";

function ServiceOverview({ service }) {
  return (
    <section className="service-overview">

      <div className="container">

        <div className="service-overview-grid">

          <div className="overview-content">

            <SectionHeading
              subtitle="Our Expertise"
              title="Service Overview"
              center={false}
            />

            <p>
              {service.overview}
            </p>

          </div>

          <div className="overview-highlights">

            {service.highlights.map((highlight) => (
              <div
                key={highlight}
                className="highlight-card"
              >
                <span>✓</span>

                <h4>{highlight}</h4>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ServiceOverview;