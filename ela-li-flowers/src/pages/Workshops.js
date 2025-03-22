import '../styles/Workshops.css';
import WorkshopForm from '../components/WorkshopForm';

function Workshops() {
  const workshops = [
    {
      title: 'סדנת זרי אביב',
      image: "/images/image10.png",
      description: 'בואו ללמוד איך להרכיב זר אביב צבעוני מפרחים טריים ומיובשים',
      price: 250
    },
    {
      title: 'סדנת פרחים מיובשים',
      image: "/images/image11.png",
      description: 'חוויה יצירתית וייחודית עם פרחים מיובשים בעיצוב אישי',
      price: 300
    }
  ];

  return (
    <div className="workshops-container">
      <h2>הסדנאות שלנו</h2>

      <div className="workshops-grid">
        {workshops.map((ws, index) => (
          <div className="workshop-card" key={index}>
            <img src={ws.image} alt={ws.title} />
            <div className="workshop-info">
              <h3>{ws.title}</h3>
              <p>{ws.description}</p>
              <p className="price">{ws.price} ₪</p>

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
