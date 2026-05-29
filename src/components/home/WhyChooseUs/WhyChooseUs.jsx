import { FaIndustry, FaUsers, FaHandshake, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaIndustry />,
      title: "Industry Expertise",
      description:
        "Deep understanding of construction, engineering and industrial operations.",
    },
    {
      icon: <FaUsers />,
      title: "Trusted Workforce",
      description:
        "Access to skilled professionals, contractors and project teams.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnerships",
      description:
        "Strong network of suppliers, vendors and industry partners.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Execution",
      description: "Efficient project delivery with quality and compliance.",
    },
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <SectionHeading
          subtitle="Why Choose MOISRA"
          title="Your Trusted Business Partner"
        />

        <div className="why-grid">
          {features.map((item, index) => (
            <motion.div className="why-card" 
            initial= {{ opacity: 0, y: 40 }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1
            }}
            viewport={{ once: true }}
            key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
