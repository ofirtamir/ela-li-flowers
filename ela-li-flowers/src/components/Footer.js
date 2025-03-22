import '../styles/Footer.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Ela-Li Flowers | כל הזכויות שמורות</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/ela_li_flowers/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} color="#C13584" /> אינסטגרם
          </a>

          <a href="https://www.facebook.com/ela_li_flowers" target="_blank" rel="noreferrer">
            <FaFacebookF size={24} color="#1877F2" /> פייסבוק
          </a>

          <a href="https://wa.me/972586017017" target="_blank" rel="noreferrer">
            <FaWhatsapp size={24} color="#25D366" /> וואטסאפ
          </a>
        </div>
      </div>

      <div className="footer-location">
        <p>סטודיו הפרחים שלנו ממוקם בתל אביב </p>
      </div>
    </footer>
  );
}

export default Footer;
