import '../styles/WorkshopForm.css';

function WorkshopForm() {
  return (
    <div className="form-container">
      <h2>הרשמה לסדנה</h2>
      <form className="workshop-form">
        <input type="text" placeholder="שם מלא" required />
        <input type="email" placeholder="אימייל" required />
        <input type="tel" placeholder="טלפון" required />
        <select required>
          <option value="">בחר סדנה</option>
          <option value="spring">סדנת זרי אביב</option>
          <option value="dry">סדנת פרחים מיובשים</option>
        </select>
        <textarea placeholder="הערות נוספות (לא חובה)" rows="4"></textarea>
        <button type="submit">שלח הרשמה</button>
      </form>
    </div>
  );
}

export default WorkshopForm;
