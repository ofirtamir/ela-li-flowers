import '../styles/Products.css';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: 'זר קטן קלאסי',
    image: "/images/image.png",
    price: 180,
    description: 'זר פרחים ורודים קלאסי - מושלם לכל אירוע חגיגי'
  },
  {
    title: 'זר קטן חתונה',
    image: "/images/image2.png",
    price: 10,
    description: 'זר מושלם ליום חתונה עם נגיעות של אדום וורוד'
  },
  {
    title: 'זר גדול מושלם',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    price: 200,
    description: 'עיצוב מיוחד עם פרחים מיובשים שישמרו לאורך זמן'
    }
    ,
    {
      title: 'זר גדול מושלם',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      price: 200,
      description: 'עיצוב מיוחד עם פרחים מיובשים שישמרו לאורך זמן'
    }
    ,
    {
      title: 'זר גדול מושלם',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      price: 200,
      description: 'עיצוב מיוחד עם פרחים מיובשים שישמרו לאורך זמן'
    }
    ,
    {
      title: 'זר גדול מושלם',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      price: 200,
      description: 'עיצוב מיוחד עם פרחים מיובשים שישמרו לאורך זמן'
    }
    ,
    {
      title: 'זר גדול מושלם',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      price: 200,
      description: 'עיצוב מיוחד עם פרחים מיובשים שישמרו לאורך זמן'
    }
    ,
    {
      title: 'זר גדול מושלם',
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
