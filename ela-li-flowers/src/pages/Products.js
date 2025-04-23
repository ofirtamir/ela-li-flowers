import '../styles/Products.css';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: 'זרון לאורחים',
    image: "https://res.cloudinary.com/dic1dbce9/image/upload/v1745409913/786E6266-605E-49C8-B4CC-28418732375C_ookphk.jpg",
    price: 15,
    description: ' מזכרת קטנה  לכל אורח שתשאיר זכרון תמידי וטבעי מהאירוע שלכם'
  },
  {
    title: 'זר בגודל 1 ליטר',
    image: "https://res.cloudinary.com/dic1dbce9/image/upload/v1745409925/IMG_5728_-_Copy_2_eohhew.jpg",
    price: 90,
    description: 'זר מיובש שנשזר בעבודת יד ונשזר בחוט ראטן לכלי זכוכית בגודל 1 ליטר. הזר יינתן בבקבוק זכוכית בצבע שקוף/ חום שקפקף וינטג'
  },
  {
    title: 'זר בגודל 0.5 ליטר*',
    image: 'https://res.cloudinary.com/dic1dbce9/image/upload/v1745409926/IMG_5807_qlbuz7.jpg',
    price: 60,
    description: 'זר מיובש שנשזר בעבודת יד ונשזר בחוט ראטן לכלי זכוכית בגודל 0.5 ליטר. הזר יינתן בבקבוק זכוכית בצבע שקוף/ חום שקפקף וינטג'
    }
  ,
  {
    title: 'זר בגודל 0.25 ליטר*',
    image: 'https://res.cloudinary.com/dic1dbce9/image/upload/v1745409919/IMG_5360_aikw6s.jpg',
    price: 60,
    description: 'זר מיובש שנשזר בעבודת יד ונשזר בחוט ראטן לכלי זכוכית בגודל 0.25 ליטר. הזר יינתן בבקבוק זכוכית בצבע שקוף/ חום שקפקף וינטג'
    }
  ,
  {
    title: 'זר בגודל 0.15 ליטר*',
    image: 'https://res.cloudinary.com/dic1dbce9/image/upload/v1745409920/IMG_5748_pykucj.jpg',
    price: 10,
    description: 'זר מיובש שנשזר בעבודת יד ונשזר בחוט ראטן לכלי זכוכית בגודל 0.15 ליטר. הזר יינתן בבקבוק זכוכית בצבע שקוף/ חום שקפקף וינטג'
    }
    ,
    {
      title: 'זר לראש',
      image: 'https://res.cloudinary.com/dic1dbce9/image/upload/v1745412752/IMG_7268_ygnsu3.jpg',
      price: 200,
      description: 'זר מיובש לראש שנשזר בעבודת יד, מקשט את הראש ואת הבית'
    }
    ,
    {
      title: 'זר ביצוב אישי',
      image: 'https://res.cloudinary.com/dic1dbce9/image/upload/v1745413965/ChatGPT_Image_Apr_23_2025_04_12_38_PM_j10tfv.png',
      price: 50,
      description: 'יש לך ויזן משלך? רוצה בקבוק בצבעים אחרים או בגודל אחר? ניתן לחשוב יחד איתי על זר משלכן  לאירוע הבא ואייצר בעבורכם מזכרת ייחודית'
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
