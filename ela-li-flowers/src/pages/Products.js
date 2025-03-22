import '../styles/Products.css';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: 'זר ורוד קלאסי',
    image: 'https://images.unsplash.com/photo-1587316745621-3757c7076f7b',
    price: 180,
    description: 'זר פרחים ורודים קלאסי - מושלם לכל אירוע חגיגי'
  },
  {
    title: 'זר ליום האהבה',
    image: 'https://images.unsplash.com/photo-1504199360784-8bf7fd57b23d',
    price: 220,
    description: 'זר מושלם ליום האהבה עם נגיעות של אדום וורוד'
  },
  {
    title: 'זר פרחים מיובשים',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    price: 200,
    description: 'עיצוב מיוחד עם פרחים מיובשים שישמרו לאורך זמן'
  }
];

function Products() {
  return (
    <div className="products-container">
      <h2>הקטלוג שלנו</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            title={product.title} 
            image={product.image} 
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
