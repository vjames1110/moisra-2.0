import { motion } from "framer-motion";

import "./KPISection.css";

function KPISection() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      value: 150,
      suffix: "+",
      label: "Clients Served",
    },
    {
      value: 1000,
      suffix: "+",
      label: "Workforce Network",
    },
    {
      value: 25,
      suffix: "+",
      label: "Industries Served",
    },
  ];

  return (
    <section className="kpi">
      <div className="container">
        <div className="kpi-header">
          <span>Our Impact</span>

          <h2>Delivering Excellence Across Industries</h2>

          <p>
            Building trusted partnerships through innovation, expertise and
            reliable project execution.
          </p>
        </div>

        <div className="kpi-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="kpi-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <h2>
                {item.value}
                {item.suffix}
              </h2>

              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KPISection;
