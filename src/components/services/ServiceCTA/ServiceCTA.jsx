import { motion } from "framer-motion";

import "./ServiceCTA.css";

function ServiceCTA({ service }) {
  return (
    <section className="service-cta">

      <div className="container">

        <motion.div
          className="service-cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="service-cta-content">

            <span>
              Let's Discuss Your Requirements
            </span>

            <h2>
              Looking for {service.title} Solutions?
            </h2>

            <p>
              Connect with MOISRA experts to explore
              customized solutions tailored to your
              business objectives, project requirements,
              and operational goals.
            </p>

            <div className="service-cta-features">

              <div>✓ Expert Consultation</div>

              <div>✓ Customized Solutions</div>

              <div>✓ Nationwide Support</div>

            </div>

          </div>

          <div className="service-cta-actions">

            <button className="service-cta-primary">
              Get Free Consultation
            </button>

            <button className="service-cta-secondary">
              Contact Us
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ServiceCTA;