import '../styles/ProductCard.css';

function ProductCard({ title, image, price, description }) {
  // הכנת ההודעה לוואטסאפ
  const message = `שלום, אני מעוניין לרכוש את "${title}" במחיר ${price} ש"ח`;
  const whatsappLink = `https://wa.me/972586011011?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">{price} ₪</p>

        {/* כפתור שולח לוואטסאפ */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="buy-button">
          לרכישה
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
