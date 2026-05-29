import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-company">

            <h2>MOISRA</h2>

            <p>
              Engineering Growth. Delivering Solutions.
              MOISRA provides integrated consultancy,
              workforce, construction, logistics,
              finance and technology solutions across
              multiple industries.
            </p>

            <div className="footer-social">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4>Services</h4>

            <ul>

              <li>
                <Link to="/services/it-solutions">
                  IT Solutions
                </Link>
              </li>

              <li>
                <Link to="/services/workforce-solutions">
                  Workforce Solutions
                </Link>
              </li>

              <li>
                <Link to="/services/civil-construction">
                  Civil & Construction
                </Link>
              </li>

              <li>
                <Link to="/services/machinery-equipment">
                  Machinery & Equipment
                </Link>
              </li>

              <li>
                <Link to="/services/transportation-logistics">
                  Transportation & Logistics
                </Link>
              </li>

              <li>
                <Link to="/services/industrial-supplies">
                  Industrial Supplies
                </Link>
              </li>

              <li>
                <Link to="/services/finance-insurance">
                  Finance & Insurance
                </Link>
              </li>

              <li>
                <Link to="/services/accounts-taxation">
                  Accounts & Taxation
                </Link>
              </li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h4>Quick Links</h4>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/clients">
                  Clients
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4>Contact Us</h4>

            <ul className="contact-list">

              <li>
                <MdPhone />
                +91 88890 93777
              </li>

              <li>
                <MdEmail />
                moisra@gmail.com
              </li>

              <li>
                <MdLocationOn />
                Bilaspur, Chhattisgarh, India
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} MOISRA.
            All Rights Reserved.
          </p>

          <div className="footer-policy">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;