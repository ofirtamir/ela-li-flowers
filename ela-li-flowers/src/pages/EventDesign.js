// 📁 src/pages/EventDesign.js
import '../styles/EventDesign.css';

const images = [
    "https://res.cloudinary.com/dic1dbce9/image/upload/v1745409917/IMG_7494_oovzpe.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/v1745409917/IMG_9028_pbm0tn.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/v1745409914/IMG_7493_kxcqwt.jpg",
    "https://res.cloudinary.com/dic1dbce9/image/upload/v1745409916/IMG_9027_akts0t.jpg"

];

function EventDesign() {
  return (
    <div className="event-design-container">
      <h2>עיצוב אירועים</h2>
      <p className="description">
        את האירוע הבא שלך אפשר לעצב עם פרחים שיקשטו את מקום האירוע ויינתנו לאורחים בתום האירוע. אפשר לבחור עיצוב מפרחים מיובשים או טריים,
        כל זר נשזר בעבודת יד לכלי זכוכית ובפתק לבחירתך עם מסר אישי. אפשר לאסוף ממני את כלל העיצובים או שאגיע למקום האירוע ואעצב! <br />
        יחד איתי נבחר את הויז'ן שמתאים לאירוע הייחודי שלך, ובמחשבה מעמיקה על איזה מזכרת להותיר לאורחים שלך.
      </p>

      <div className="image-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`event-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default EventDesign;
