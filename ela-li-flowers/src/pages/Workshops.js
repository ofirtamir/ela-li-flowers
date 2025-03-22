import '../styles/Workshops.css';
import WorkshopForm from '../components/WorkshopForm';

function Workshops() {
  const workshops = [
    {
      title: 'סדנת זרי אביב',
      image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852',
      description: 'בואו ללמוד איך להרכיב זר אביב צבעוני מפרחים טריים ומיובשים.',
      price: 250
    },
    {
      title: 'סדנת פרחים מיובשים',
      image: 'https://images.unsplash.com/photo-1567265833339-875f53ff110c',
      description: 'חוויה יצירתית וייחודית עם פרחים מיובשים בעיצוב אישי.',
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
            </div>
          </div>
        ))}
      </div>

      {/* החלק החדש - טופס הרשמה */}
      <WorkshopForm />
    </div>
  );
}

export default Workshops;
