import { motion } from "framer-motion";

import "./Clients.css";

function Clients() {
  const clients = [
    "Construction",
    "Infrastructure",
    "Manufacturing",
    "Logistics",
    "Technology",
    "Finance",
    "Industrial",
    "Government"
  ];

  return (
    <section className="clients">
      <div className="container">

        <div className="clients-header">

          <span>Trusted Across Industries</span>

          <h2>
            Delivering Solutions For
            Diverse Business Sectors
          </h2>

          <p>
            MOISRA serves organizations across
            construction, engineering, logistics,
            manufacturing, finance and technology.
          </p>

        </div>

        <div className="clients-grid">

          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
            >
              <h3>{client}</h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Clients;