import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Ela-Li Flowers | כל הזכויות שמורות</p>

        <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">🌸 אינסטגרם</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">📘 פייסבוק</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">📞 וואטסאפ</a>
        </div>
      </div>

      <div className="footer-location">
        <p>סטודיו הפרחים שלנו ממוקם בתל אביב</p>
        {/* אפשר להטמיע מפה כאן */}
      </div>
    </footer>
  );
}

export default Footer;
