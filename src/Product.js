import products from "./products";
import ProductCard from "./ProductCard";
import "./ProductCard.css";
export default function Product() {
    return (

        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}