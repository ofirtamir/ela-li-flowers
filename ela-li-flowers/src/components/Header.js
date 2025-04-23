import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* המבורגר ימין במובייל */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* הלוגו - מוצג רק במובייל */}
      <h1 className="site-title">Ela-Li Flowers</h1>

      {/* תפריט ניווט */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/">דף הבית</Link>
        <Link to="/products">קטלוג</Link>
        <Link to="/workshops">סדנאות</Link>
        <Link to="/event-design">עיצוב אירועים</Link>
        <Link to="/about">אודות</Link>
        <Link to="/contact">צור קשר</Link>
      </nav>
    </header>
  );
}

export default Header;
