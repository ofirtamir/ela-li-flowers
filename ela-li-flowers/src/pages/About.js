import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h2>קצת עלינו</h2>
      <p>
        Ela-Li Flowers הוא סטודיו בוטיק לאמנות בפרחים. אנחנו יוצרים זרים, סידורים ויצירות מפרחים טריים ומיובשים
        באהבה ובקפידה.
      </p>
      <p>
        כל זר וסידור נבנה בעבודת יד, עם תשומת לב לכל פרט, כדי להפוך כל אירוע וחוויה לרגע מיוחד ובלתי נשכח.
      </p>
      <img 
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba" 
        alt="סטודיו פרחים" 
        className="about-image"
      />
    </div>
  );
}

export default About;
