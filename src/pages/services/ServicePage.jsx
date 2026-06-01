import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

import ServiceHero from "../../components/services/ServiceHero/ServiceHero";
import ServiceOverview from "../../components/services/ServiceOverview/ServiceOverview";
import ServiceCategories from "../../components/services/ServiceCategories/ServiceCategories";
import ServiceCTA from "../../components/services/ServiceCTA/ServiceCTA";
import ServiceEnquiryForm from "../../components/services/ServiceEnquiryForm/ServiceEnquiryForm";

import { servicesData } from "../../data/servicesData";

import { useParams } from "react-router-dom";

function ServicePage() {
  const { serviceSlug } = useParams();
  const service = servicesData.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <>
        <Header />
        <div
          className="container"
          style={{
            paddingTop: "200px",
            paddingBottom: "100px",
          }}
        >
          <h1>Service Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceCategories service={service} />
      <ServiceEnquiryForm service={service} />
      <ServiceCTA service={service} />
      <Footer />
    </>
  );
}

export default ServicePage;
