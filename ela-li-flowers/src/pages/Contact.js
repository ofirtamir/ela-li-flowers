import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>צור קשר</h2>
      <p>נשמח לשמוע ממך! מלא/י את הטופס ונחזור אליך בהקדם.</p>

      <form className="contact-form">
        <input type="text" placeholder="שם מלא" required />
        <input type="email" placeholder="אימייל" required />
        <input type="tel" placeholder="טלפון" />
        <textarea placeholder="ההודעה שלך..." rows="5" required></textarea>
        <button type="submit">שלח</button>
      </form>
    </div>
  );
}

export default Contact;
