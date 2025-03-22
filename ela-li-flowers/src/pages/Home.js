import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1504199360784-8bf7fd57b23d",
    "https://images.unsplash.com/photo-1587316745621-3757c7076f7b",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1603190287605-e6ade32fa852",
    "https://images.unsplash.com/photo-1567265833339-875f53ff110c",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h2>ברוכים הבאים ל-<span>Ela-Li Flowers</span></h2>
        <p>סטודיו בוטיק ליצירת זרי פרחים, סידורים ועיצוב בפרחים מיובשים באווירה קסומה.</p>

        {/* כפתור פעיל לקטלוג */}
        <Link to="/products" className="hero-button">לצפייה בקטלוג</Link>
      </section>

      <section className="gallery-section">
        <h3>טעימה מהעבודות שלנו</h3>
        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`gallery-${index}`} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
