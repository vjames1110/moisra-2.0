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
            key={service.title}
            className="mega-column"
          >
            <h4>{service.title}</h4>

            {service.items.map((item) => (
              <p key={item}>
                {item}
              </p>
            ))}

          </div>

        ))}

      </div>

    </div>
  );
}

export default MegaMenu;