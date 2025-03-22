import { useState } from 'react';
import '../styles/WorkshopForm.css';

function WorkshopForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    workshop: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // מכין הודעה לוואטסאפ
    const message = `
שלום, התקבלה הרשמה לסדנה:
שם: ${formData.fullName}
אימייל: ${formData.email}
טלפון: ${formData.phone}
סדנה: ${formData.workshop}
הערות: ${formData.notes}
    `;

    // שלח לוואטסאפ
    window.open(`https://wa.me/972586017017?text=${encodeURIComponent(message)}`, '_blank');

    // אפשר להוסיף כאן גם שליחה למייל או הודעה למשתמש
  };

  return (
    <form className="workshop-form" onSubmit={handleSubmit}>
      <h2>הרשמה לסדנה</h2>

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

      <select
        name="workshop"
        value={formData.workshop}
        onChange={handleChange}
        required
      >
        <option value="">בחר סדנה</option>
        <option value="סדנת זרי אביב">סדנת זרי אביב</option>
        <option value="סדנת פרחים מיובשים">סדנת פרחים מיובשים</option>
      </select>

      <textarea
        name="notes"
        placeholder="הערות נוספות (לא חובה)"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">שלח הרשמה</button>
    </form>
  );
}

export default WorkshopForm;
