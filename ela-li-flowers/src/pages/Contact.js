import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // הכנת ההודעה
    const whatsappMessage = `
📩 פנייה חדשה מהאתר:
שם: ${formData.fullName}
אימייל: ${formData.email}
טלפון: ${formData.phone}
הודעה: ${formData.message}
    `;

    // שליחה לוואטסאפ
    window.open(`https://wa.me/972586017017?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    // אפשר לאפס את הטופס כאן אם תרצה
    // setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>צור קשר</h2>
      <p>נשמח לשמוע ממך! מלא/י את הטופס ונחזור אליך בהקדם.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="שם מלא"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="ההודעה שלך..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">שלח</button>
      </form>
    </div>
  );
}

export default Contact;
