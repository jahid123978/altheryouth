import react from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import "../../styles/style.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="custom-grid-container">
        <p className="custom-text-class">Learn About AlterYouth</p>
        <span className="custom-text-hover-class">Home</span>
        <span className="custom-text-hover-class">About us</span>
        <span className="custom-text-hover-class">How it works</span>
        <span className="custom-text-hover-class">Scholarship Policy</span>
        <span className="custom-text-hover-class">Get the app</span>
      </div>

      <div className="footer-text-literate">
        <span className="footer-text-literate-span">
          Towards a literate Bangladesh
        </span>
      </div>

      <hr />
      <div>
        <div className="footer-icons">
          <FiFacebook className="footer-icons-fb" />
          <FaInstagram />
        </div>
        <div className="footer-copyright">
          <p className="custom-text-mb-class">© 2025 AlterYouth Limited</p>
          <div class="custom-flex-gap-class ">
            <span class="custom-text-sm">Terms of Service</span>
            <div>⋅</div>
            <span class="custom-text-sm" href="/privacy-policy">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
