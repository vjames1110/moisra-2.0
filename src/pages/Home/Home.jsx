import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import KPISection from "../../components/home/KPISection/KPISection";
import Clients from "../../components/home/Clients/Clients";
import CTASection from "../../components/home/CTASection/CTASection";

function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Services />

      <WhyChooseUs />

      <KPISection />

      <Clients />

      <CTASection />

      <Footer />
    </>
  );
}

export default Home;