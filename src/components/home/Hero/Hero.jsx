import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            Construction • Consultancy • Contracting
          </span>

          <h1>
            Engineering Growth.
            <br />
            Delivering Solutions.
          </h1>

          <p>
            MOISRA provides integrated consultancy,
            workforce, construction, logistics,
            finance and technology solutions for
            modern businesses.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Quote
            </button>

            <button className="secondary-btn">
              Our Services
            </button>
          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Construction"
          />

          <div className="floating-card card-1">
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="floating-card card-2">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;