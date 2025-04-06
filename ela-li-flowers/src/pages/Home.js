import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const galleryImages = [
    "/images/image.png",
    "/images/image2.png",
    "/images/image3.png",
    "https://images.unsplash.com/photo-1587316745621-3757c7076f7b",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1603190287605-e6ade32fa852"
  ];

  return (
    <div className="home-container">
      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/images/image2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Ela-Li Flowers</h1>
          <p>סטודיו בוטיק לעיצוב זרי פרחים טבעיים ומיובשים באווירה קסומה ואסתטית</p>
          <Link to="/products" className="hero-button">לצפייה בקטלוג</Link>
        </div>
      </section>

      <section className="about-section">
        <h2>קצת עלינו</h2>
        <p>אנחנו מאמינים ביופי של הטבע, כל זר נוצר מתוך השראה ואהבה לצבעים, צורות ופריחה עונתית.</p>
      </section>

      <section className="gallery-section">
        <h3>טעימה מהעבודות שלנו</h3>
        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`gallery-${index}`} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <p>רוצים להתייעץ או להזמין זר בעיצוב אישי?</p>
        <Link to="/contact" className="hero-button">דברו איתנו</Link>
      </section>
    </div>
  );
}

export default Home;
