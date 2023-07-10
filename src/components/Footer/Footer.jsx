// ** Footer.jsx represents the bottom section of the page and credits sourced material ** //
import '../Footer/Footer.css'
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="footer-container">
    <div className="footer-link-container">
      <div>
        <Icon className="scientist-svg" icon="eos-icons:scientist-outlined" /> &nbsp; 
      </div>
      <div>
        <a
          href="https://bhamla.gatech.edu/project-blog/sharpshooter-superpropulsion"
          target="_blank"
        >
          <span className="link-text">Reference Material and Inspiration: The Bhamla Lab</span>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Footer;
