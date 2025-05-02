import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const galleryImages = [
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409919/IMG_5813_-_Copy_fq3wzp.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409916/IMG_9027_akts0t.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409926/IMG_5807_qlbuz7.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409918/IMG_5817_hictj6.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409917/IMG_5765_wgrwxa.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409914/IMG_7493_kxcqwt.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745423014/IMG_5360_1_wdqq34.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745423018/IMG_5793_caqxgs.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745423016/IMG_5401_hi0psa.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409917/IMG_7494_oovzpe.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745413454/image10_ny1syd.png",
    "https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745423015/IMG_5784_-_Copy_2_nz8gec.jpg"
  ];

  return (
    <div className="home-container">
      <section
        className="hero-section"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dic1dbce9/image/upload/f_auto,q_auto/v1745409918/IMG_5817_hictj6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Ela-Li Flowers</h1>
          <p>סטודיו בוטיק לעיצוב זרי פרחים טבעיים ומיובשים באווירה קסומה וייחודית</p>
          <Link to="/products" className="hero-button">לצפייה בקטלוג</Link>
        </div>
      </section>

      <section className="about-section">
        <h2>קצת על אלה-לי</h2>
        <p>כלל הזרים נשזרים בעבודת יד ונבחרים בקפידה. מתוך אמונה כי היופי נמצא בטבעיות של הפרחים. כל זר נוצר מתוך השראה ואהבה לפרחים ולצבעים שבטבע, בהתאם לשיטת השזירה הנבחרת ולפריחה העונתית.</p>
        <p>הזרים המיובשים עברו תהליך ייבוש וישארו איתכם לתמיד והזרים הטריים נבחרים בקפידה בהתאם לעונה ולמקום האירוע.</p>
        <p>הפרחים המיובשים של אלה- לי משלבים בין זר פרחים טבעי ואמיתי לבין יצירה שנשארת איתכן.ם לתקופה ממושכת. ניתנת האפשרות לרכוש זרים יחידים או מקבצים בבחירה אישית.</p>
        <p>את כלל הזרים המיושבים ניתן לרכוש ביחידים ובמקבצים וניתנת האפשרות להוסיף חלוקי נחל לשמירה על יציבות הזר.</p>
      </section>

      <section className="gallery-section">
        <h3>טעימה מהעבודות שלנו</h3>
        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-${index}`}
              
              width="300"
              height="200"
            />
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
