import "./Footer.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGoogle } from "react-icons/fa";
const ICON_SIZE = 20;
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>שעות פעילות</h4>
          <p>ראשון - חמישי 21:00 - 07:00</p>
          <p>שישי: 14:00 - 07:00</p>
        </div>

        <div className="footer-section">
          <p>
                <a href="https://wa.me/972503612224" target="_blank" rel="noreferrer">
                    <FaWhatsapp size={ICON_SIZE} /> 
                </a>
            </p>
            <p>
                <a href="mailto:oshratz2002@gmail.com">
                    <FaEnvelope size={ICON_SIZE} /> 
                </a>
            </p>
        <p>
            <a href="https://maps.google.com/?q=+קרית+ספורט+קדימה" target="_blank" rel="noreferrer">
                <FaMapMarkerAlt size={ICON_SIZE} /> 
            </a>
        </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©tennisIsrel כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}

export default Footer;