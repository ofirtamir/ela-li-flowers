import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Ela-Li Flowers</div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>דף הבית</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>קטלוג</Link>
        <Link to="/workshops" onClick={() => setMenuOpen(false)}>סדנאות</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>אודות</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>צור קשר</Link>
      </nav>

      {/* כפתור ההמבורגר */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;
