import { servicesData } from "../../../data/servicesData";
import { motion } from "framer-motion";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <SectionHeading
          subtitle="Our Services"
          title="Complete Business & Construction Solutions"
        />

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <Icon />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to={service.path} className="service-link">
                  Learn More
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
