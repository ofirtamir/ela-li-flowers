import '../styles/Workshops.css';
import WorkshopForm from '../components/WorkshopForm';

function Workshops() {
  const workshops = [
    {
      title: 'סדנה פרטית לשזירת זרי ראש מפרחים מיובשים',
      image: "https://res.cloudinary.com/dic1dbce9/image/upload/v1745414221/IMG_0255_11_fq9ljg.jpg",
      description: 'כל משתתפת בסדנה תלמד לשזור זר לראש שילווה אותה לכל אירוע שתבחר ויקשט קיר בכל חלל. כלל הזרים שנבחרים לעיצוב הזר עברו תהליך ייבוש מסורתי וישמרו לאורך זמן.',
      price: 90
    },
    {
      title: 'סדנת שזירה פרטית מפרחים מיובשים לכלי זכוכית',
      image: "/images/image11.png",
      description: 'כלל הזרים עברו תהליך ייבוש יסודי והזר יישמר לאורך זמן. בליווי והדרכה שלי, כל משתתפת בסדנה תלמד את טכניקת השזירה המתאימה לשיטה ותשזור זר ייחודי משלה. הזר יינתן יחד עם ואזה שקופה מזכוכית וישאר לקשט כל חלל לבחירתה של המשתתפת. ',
      price: 90 
    }
    ,
    {
      title: 'סדנת שזירה פרטית מפרחים טריים לכלי זכוכית',
      image: "https://res.cloudinary.com/dic1dbce9/image/upload/v1745413454/image10_ny1syd.png",
      description: 'כל משתתפת בסדנה תשזור זר ייחודי משלה מפרחים טריים. בליווי והדרכה שלי, כל משתתפת בסדנה תלמד את טכניקת השזירה המתאימה  לשיטה ותשזור זר ייחודי משלה. הזר יינתן יחד עם ואזה שקופה מזכוכית וישאר לקשט כל חלל לבחירתה של המשתתפת.  ',
      price: 90 
    }
  ];

  return (
    <div className="workshops-container">
      <h2>הסדנאות שלנו</h2>
      <h3>רוצה לארגן סדנת שזירה שמשלבת בין יצירה לזמן גיבוש? </h3>
      <h3>סדנאות שזירה בקבוצות פרטיות ולכל גיל, בהגעה עד למקום הסדנה. כל אורחת תקבל יחס אישי ותצא בתום הסדנה עם זר משלה.
      </h3>
      <div className="workshops-grid">
        {workshops.map((ws, index) => (
          <div className="workshop-card" key={index}>
            <img src={ws.image} alt={ws.title} />
            <div className="workshop-info">
              <h3>{ws.title}</h3>
              <p>{ws.description}</p>
              <p className="price">  {ws.price} ₪ למשתתף</p>

              {/* כפתור וואטסאפ */}
              <a
                href={`https://wa.me/972586017017?text=שלום, אני מעוניין להזמין את הסדנה: ${encodeURIComponent(ws.title)} במחיר ${ws.price} ש"ח`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                הזמן סדנה
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* טופס הרשמה */}
      <WorkshopForm />
    </div>
  );
}

export default Workshops;
