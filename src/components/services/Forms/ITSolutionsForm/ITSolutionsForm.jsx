import { useState } from "react";

import SectionHeading from "../../../common/SectionHeading/SectionHeading";

import { formConfig } from "../../../../data/formConfig";

import API_URL from "../../../../config/api";

import "./ITSolutionsForm.css";

function ITSolutionsForm({ service }) {
  console.log("Service:", service);
  console.log("Slug:", service.slug);
  console.log("Config:", formConfig[service.slug]);
  const config = formConfig[service.slug];

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    company: "",
    requiredService: "",
    budget: "",
    timeline: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        serviceType: "it-solutions",

        enquiryType: "client",

        fullName: formData.fullName,

        mobile: formData.mobile,

        email: formData.email,

        company: formData.company,

        formData: {
          requiredService: formData.requiredService,

          budget: formData.budget,

          timeline: formData.timeline,

          requirement: formData.requirement,
        },
      };
      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);

        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          company: "",
          requiredService: "",
          budget: "",
          timeline: "",
          requirement: "",
        });
      } else {
        alert(result.message || "Unable to submit enquiry.");
      }
    } catch (error) {
      console.error(error);

      alert("Unable to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };

  if (!config) {
  return (
    <div
      style={{
        background: "red",
        color: "white",
        padding: "50px",
      }}
    >
      CONFIG NOT FOUND

      <br />

      Slug:
      {service.slug}
    </div>
  );
}

  return (
    <section className="service-form">
      <div className="container">
        <SectionHeading subtitle="Get Started" title={config.title} />

        <div className="enquiry-form-wrapper">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Service Required *</label>

                <select
                  name="requiredService"
                  value={formData.requiredService}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>

                  {config.services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Project Budget</label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget</option>

                  {config.budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Expected Timeline</label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select Timeline</option>

                  {config.timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Requirement Description *</label>

                <textarea
                  rows="6"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {success && (
              <div className="success-message">
                Thank you! Our team will contact you shortly.
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ITSolutionsForm;
