import { useState } from "react";

import {
  FaUserTie,
  FaBuilding,
} from "react-icons/fa";

import SectionHeading from "../../../common/SectionHeading/SectionHeading";

import { formConfig } from "../../../../data/formConfig";

import API_URL from "../../../../config/api";

import "./WorkForceForm.css";

function WorkForceForm({ service }) {
  const config = formConfig[service.slug];

  const [enquiryType, setEnquiryType] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [employeeData, setEmployeeData] =
    useState({
      fullName: "",
      mobile: "",
      email: "",
      currentLocation: "",

      department: "",
      role: "",
      experience: "",

      currentSalary: "",
      expectedSalary: "",
      noticePeriod: "",

      resumeLink: "",
      remarks: "",
    });

  const [employerData, setEmployerData] =
    useState({
      companyName: "",
      contactPerson: "",
      mobile: "",
      email: "",
      location: "",

      department: "",
      roleRequired: "",

      positionsRequired: "",
      experienceRequired: "",

      hiringTimeline: "",

      jobDescription: "",
      remarks: "",
    });

  const handleEmployeeChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmployerChange = (e) => {
    setEmployerData({
      ...employerData,
      [e.target.name]: e.target.value,
    });
  };

  const employeeRoles =
    config.rolesByDepartment[
      employeeData.department
    ] || [];

  const employerRoles =
    config.rolesByDepartment[
      employerData.department
    ] || [];

  const submitEmployee = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        serviceType:
          "workforce-solutions",

        enquiryType:
          "employee",

        fullName:
          employeeData.fullName,

        mobile:
          employeeData.mobile,

        email:
          employeeData.email,

        company: "",

        formData: {
          currentLocation:
            employeeData.currentLocation,

          department:
            employeeData.department,

          role:
            employeeData.role,

          experience:
            employeeData.experience,

          currentSalary:
            employeeData.currentSalary,

          expectedSalary:
            employeeData.expectedSalary,

          noticePeriod:
            employeeData.noticePeriod,

          resumeLink:
            employeeData.resumeLink,

          remarks:
            employeeData.remarks,
        },
      };

      const response =
        await fetch(
          "http://127.0.0.1:8000/api/leads",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                payload
              ),
          }
        );

      const result =
        await response.json();

      if (
        response.ok &&
        result.success
      ) {
        setSuccess(true);

        setEmployeeData({
          fullName: "",
          mobile: "",
          email: "",
          currentLocation: "",
          department: "",
          role: "",
          experience: "",
          currentSalary: "",
          expectedSalary: "",
          noticePeriod: "",
          resumeLink: "",
          remarks: "",
        });
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to submit application."
      );
    } finally {
      setLoading(false);
    }
  };

  const submitEmployer = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        serviceType:
          "workforce-solutions",

        enquiryType:
          "employer",

        fullName:
          employerData.contactPerson,

        mobile:
          employerData.mobile,

        email:
          employerData.email,

        company:
          employerData.companyName,

        formData: {
          location:
            employerData.location,

          department:
            employerData.department,

          roleRequired:
            employerData.roleRequired,

          positionsRequired:
            employerData.positionsRequired,

          experienceRequired:
            employerData.experienceRequired,

          hiringTimeline:
            employerData.hiringTimeline,

          jobDescription:
            employerData.jobDescription,

          remarks:
            employerData.remarks,
        },
      };

      const response =
        await fetch(
          `${API_URL}/api/leads`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                payload
              ),
          }
        );

      const result =
        await response.json();

      if (
        response.ok &&
        result.success
      ) {
        setSuccess(true);

        setEmployerData({
          companyName: "",
          contactPerson: "",
          mobile: "",
          email: "",
          location: "",
          department: "",
          roleRequired: "",
          positionsRequired: "",
          experienceRequired: "",
          hiringTimeline: "",
          jobDescription: "",
          remarks: "",
        });
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to submit enquiry."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="workforce-form-section">

      <div className="container">

        <SectionHeading
          subtitle="Workforce Solutions"
          title="Choose Your Requirement"
        />

        <div className="workforce-selector">

          <div
            className={`selector-card ${
              enquiryType ===
              "employee"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setEnquiryType(
                "employee"
              )
            }
          >
            <FaUserTie />

            <h3>
              Looking For Job
            </h3>

            <p>
              Register yourself and
              connect with top
              employers.
            </p>
          </div>

          <div
            className={`selector-card ${
              enquiryType ===
              "employer"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setEnquiryType(
                "employer"
              )
            }
          >
            <FaBuilding />

            <h3>
              Hiring Talent
            </h3>

            <p>
              Find skilled manpower
              for your business.
            </p>
          </div>

        </div>

        {/* Employee Form */}

        {enquiryType ===
          "employee" && (
          <form
            className="workforce-form"
            onSubmit={
              submitEmployee
            }
          >
            {/* We'll style and structure the form fully in CSS */}

            <>
  <h3 className="form-section-title">
    Personal Information
  </h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Full Name *</label>
      <input
        type="text"
        name="fullName"
        value={employeeData.fullName}
        onChange={handleEmployeeChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Mobile Number *</label>
      <input
        type="text"
        name="mobile"
        value={employeeData.mobile}
        onChange={handleEmployeeChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Email *</label>
      <input
        type="email"
        name="email"
        value={employeeData.email}
        onChange={handleEmployeeChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Current Location *</label>
      <input
        type="text"
        name="currentLocation"
        value={employeeData.currentLocation}
        onChange={handleEmployeeChange}
        required
      />
    </div>

  </div>

  <h3 className="form-section-title">
    Professional Information
  </h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Department *</label>

      <select
        name="department"
        value={employeeData.department}
        onChange={handleEmployeeChange}
        required
      >
        <option value="">
          Select Department
        </option>

        {config.departments.map(
          (dept) => (
            <option
              key={dept}
              value={dept}
            >
              {dept}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Role Applying For *
      </label>

      <select
        name="role"
        value={employeeData.role}
        onChange={handleEmployeeChange}
        required
      >
        <option value="">
          Select Role
        </option>

        {employeeRoles.map(
          (role) => (
            <option
              key={role}
              value={role}
            >
              {role}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Experience Level *
      </label>

      <select
        name="experience"
        value={employeeData.experience}
        onChange={handleEmployeeChange}
        required
      >
        <option value="">
          Select Experience
        </option>

        {config.experienceLevels.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Current Salary
      </label>

      <select
        name="currentSalary"
        value={employeeData.currentSalary}
        onChange={handleEmployeeChange}
      >
        <option value="">
          Select Salary
        </option>

        {config.currentSalaryRanges.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Expected Salary *
      </label>

      <select
        name="expectedSalary"
        value={employeeData.expectedSalary}
        onChange={handleEmployeeChange}
        required
      >
        <option value="">
          Select Salary
        </option>

        {config.expectedSalaryRanges.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Notice Period *
      </label>

      <select
        name="noticePeriod"
        value={employeeData.noticePeriod}
        onChange={handleEmployeeChange}
        required
      >
        <option value="">
          Select Notice Period
        </option>

        {config.noticePeriods.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group full-width">
      <label>
        Resume Drive Link
      </label>

      <input
        type="url"
        name="resumeLink"
        value={employeeData.resumeLink}
        onChange={handleEmployeeChange}
      />
    </div>

    <div className="form-group full-width">
      <label>Remarks</label>

      <textarea
        rows="5"
        name="remarks"
        value={employeeData.remarks}
        onChange={handleEmployeeChange}
      />
    </div>

  </div>

  {success && (
    <div className="success-message">
      Registration submitted successfully.
    </div>
  )}

  <button
    type="submit"
    className="submit-btn"
    disabled={loading}
  >
    {loading
      ? "Submitting..."
      : "Submit Application"}
  </button>
</>
          </form>
        )}

        {/* Employer Form */}

        {enquiryType ===
          "employer" && (
          <form
            className="workforce-form"
            onSubmit={
              submitEmployer
            }
          >
            {/* Employer fields */}

            <>
  <h3 className="form-section-title">
    Company Information
  </h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Company Name *</label>

      <input
        type="text"
        name="companyName"
        value={employerData.companyName}
        onChange={handleEmployerChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Contact Person *</label>

      <input
        type="text"
        name="contactPerson"
        value={employerData.contactPerson}
        onChange={handleEmployerChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Mobile Number *</label>

      <input
        type="text"
        name="mobile"
        value={employerData.mobile}
        onChange={handleEmployerChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Email Address *</label>

      <input
        type="email"
        name="email"
        value={employerData.email}
        onChange={handleEmployerChange}
        required
      />
    </div>

    <div className="form-group full-width">
      <label>Company Location *</label>

      <input
        type="text"
        name="location"
        value={employerData.location}
        onChange={handleEmployerChange}
        required
      />
    </div>

  </div>

  <h3 className="form-section-title">
    Hiring Requirement
  </h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Department *</label>

      <select
        name="department"
        value={employerData.department}
        onChange={handleEmployerChange}
        required
      >
        <option value="">
          Select Department
        </option>

        {config.departments.map(
          (dept) => (
            <option
              key={dept}
              value={dept}
            >
              {dept}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Role Required *
      </label>

      <select
        name="roleRequired"
        value={employerData.roleRequired}
        onChange={handleEmployerChange}
        required
        disabled={
          !employerData.department
        }
      >
        <option value="">
          Select Role
        </option>

        {employerRoles.map(
          (role) => (
            <option
              key={role}
              value={role}
            >
              {role}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Positions Required *
      </label>

      <select
        name="positionsRequired"
        value={
          employerData.positionsRequired
        }
        onChange={handleEmployerChange}
        required
      >
        <option value="">
          Select Positions
        </option>

        {config.positionsRequired.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group">
      <label>
        Experience Required *
      </label>

      <select
        name="experienceRequired"
        value={
          employerData.experienceRequired
        }
        onChange={handleEmployerChange}
        required
      >
        <option value="">
          Select Experience
        </option>

        {config.experienceLevels.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

    <div className="form-group full-width">
      <label>
        Hiring Timeline *
      </label>

      <select
        name="hiringTimeline"
        value={
          employerData.hiringTimeline
        }
        onChange={handleEmployerChange}
        required
      >
        <option value="">
          Select Timeline
        </option>

        {config.hiringTimelines.map(
          (item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </div>

  </div>

  <h3 className="form-section-title">
    Additional Information
  </h3>

  <div className="form-grid">

    <div className="form-group full-width">
      <label>
        Job Description
      </label>

      <textarea
        rows="5"
        name="jobDescription"
        value={
          employerData.jobDescription
        }
        onChange={handleEmployerChange}
      />
    </div>

    <div className="form-group full-width">
      <label>
        Additional Remarks
      </label>

      <textarea
        rows="5"
        name="remarks"
        value={
          employerData.remarks
        }
        onChange={handleEmployerChange}
      />
    </div>

  </div>

  {success && (
    <div className="success-message">
      Hiring requirement submitted
      successfully.
    </div>
  )}

  <button
    type="submit"
    className="submit-btn"
    disabled={loading}
  >
    {loading
      ? "Submitting..."
      : "Submit Requirement"}
  </button>
</>
          </form>
        )}

      </div>

    </section>
  );
}

export default WorkForceForm;