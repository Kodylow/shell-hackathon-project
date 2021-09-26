import './index.scss';
import Product from '../Product';
import { useState } from 'react';

function ProductList({displayProduct, products, setProductQuantity, updates}) {
  return (
  <div className="ProductList">
    {
      products.map(function(product) {
        return <Product
            updates={updates}
            product={product}
            key={product.index}
            displayProduct={displayProduct}
            setProductQuantity={setProductQuantity} />;
      })
    }
  </div>
  );
}

export default ProductList;
