import { motion } from "framer-motion";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta">

      <div className="container">

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="cta-content">

            <span>
              Let's Build Something Great
            </span>

            <h2>
              Need Reliable Consultancy &
              Contracting Services?
            </h2>

            <p>
              From workforce solutions to
              construction execution, logistics,
              finance and technology consulting,
              MOISRA delivers end-to-end support
              for business growth.
            </p>

            <div className="cta-features">

              <div>✓ Expert Team</div>

              <div>✓ Fast Execution</div>

              <div>✓ Nationwide Support</div>

            </div>

          </div>

          <div className="cta-actions">

            <button className="cta-primary">
              Get Free Consultation
            </button>

            <button className="cta-secondary">
              Contact Us
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;