import ITSolutionsForm from "../Forms/ITSolutionsForm/ITSolutionsForm";
import WorkForceForm from "../Forms/WorkForceForm/WorkForceForm";

function ServiceEnquiryForm({ service }) {

  switch (service.slug) {

    case "it-solutions":
      return (
        <ITSolutionsForm
          service={service}
        />
      );

    case "workforce-solutions":
      return (
        <WorkForceForm
          service={service}
        />
      );

    default:
      return null;
  }
}

export default ServiceEnquiryForm;