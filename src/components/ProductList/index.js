import './index.scss';
import Product from '../Product';

function ProductList({ products, displayProduct }) {
  return (
  <div className="ProductList">
    {
      products.map(function(product, index) {
        return <Product
          product={product}
          key={index}
          displayProduct={displayProduct} />;
      })
    }
  </div>
  );
}

export default ProductList;
