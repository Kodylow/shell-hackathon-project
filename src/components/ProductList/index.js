import './index.scss';
import Product from '../Product';

function ProductList({ products }) {
  return (
  <div className="ProductList">
    {
      products.map(function(product, index) {
        return <Product product={product} key={index} />;
      })
    }
  </div>
  );
}

export default ProductList;
