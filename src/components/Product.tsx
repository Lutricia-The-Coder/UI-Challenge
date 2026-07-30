
import cakeImg from '../assets/custom-cakes.png'
import macaronImg from '../assets/macarons.png'
import cupcakeImg from '../assets/cupcake-collection.png'


const products = [
  { title: 'Custom Cakes',
    img:cakeImg,
    text:'Handcrafted masterpieces layered with silky buttercream to make every celebration unforgettable.',
    btn: 'View Category' },

  { title: 'Macarons',
   img:macaronImg,
    text:'Delicate French confections with crisp shells and luscious fillings, available in a rainbow of flavors to brighten any occasion', 
    btn: 'View Category' },

  { title: 'Cupcake Collections',
    img:cupcakeImg,
    text:'Whimsical cupcakes topped with swirls of frosting and charming details — perfect for gifting, sharing, or indulging yourself',
     btn: 'Order Today' },
];

const Product = () => {
  return (
 <section className="products">
        <h2>Delight in every Bite!</h2>

    <div className="product-grid">
      {products.map((p) => (
    <div className="product-card" key={p.title}>
    
     <img src ={p.img} alt ={p.title} className='product-image'/>


    <div  style={{ backgroundColor: '#EBE8E3' }} className='product-text'>
          <h3>{p.title}</h3>
          <p>{p.text} </p>
          <button>{p.btn}</button>
  </div>
          
        </div>
      ))}
    </div>

  </section>
 
  )
}

export default Product
