import { Link } from "react-router-dom";
import { servicesData } from "../../../data/servicesData";

import "./MegaMenu.css";

function MegaMenu() {
  return (
    <div className="mega-wrapper">

      <span className="service-link">
        Services
      </span>

      <div className="mega-menu">

        {servicesData.map((service) => (
          <div
            key={service.slug}
            className="mega-column"
          >

            <Link
              to={`/services/${service.slug}`}
              className="mega-service-link"
            >
              <h4>{service.title}</h4>
            </Link>

            <p>
              {service.tagline}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MegaMenu;