import { useParams } from "react-router-dom";
import FavIconSwitcher from "../../components/FavIconSwitcher"
import CartIconSwitcher from "../../components/CartIconSwitcher"
import products from "../../inventory/ProductList";
import "./Product-Detail.css";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="text">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <FavIconSwitcher productId={id}/>
        <CartIconSwitcher productId={id}/>
      </div>
    </div>
  );
}

export default ProductDetail;