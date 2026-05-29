import { motion } from "framer-motion";

import SectionHeading from "../../common/SectionHeading/SectionHeading";

import "./ServiceCategories.css";

function ServiceCategories({ service }) {
  return (
    <section className="service-categories">

      <div className="container">

        <SectionHeading
          subtitle="Our Solutions"
          title={`${service.title} Services`}
        />

        <div className="categories-grid">

          {service.categories.map((category, index) => (

            <motion.div
              key={category.id}
              className="category-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <div className="category-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>
                {category.title}
              </h3>

              <p>
                {category.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceCategories;