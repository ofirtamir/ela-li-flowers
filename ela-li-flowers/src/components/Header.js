import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  // סגירת התפריט בלחיצה מחוץ לו
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div
        className="hamburger"
        ref={burgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <h1 className="site-title">Ela-Li Flowers</h1>

      <nav className={`nav ${menuOpen ? 'open' : ''}`} ref={navRef}>
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
