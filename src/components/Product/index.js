import './index.scss';
import { useState } from 'react';

function Product({ updates, artist, image, date, time, venue, quantity, location, product, displayProduct, setProductQuantity }) {
  return (
    <div className="Product">
      <div className="image_block">
        <img src={product.image} alt={product.artist} className="event_image" />
      </div>

      <div className="date_time_block">
        <p className="date_block">
          <strong>{product.date}</strong>
        </p>
        <p className="time_block">{product.time}</p>
      </div>

      <div className="details_block">
        <p className="artist_block">
          <strong>{product.artist}</strong>
        </p>
        <p className="time_block">{product.venue} - {product.location}</p>
      </div>

      <div className="quantity_block">
        <img
          alt="decrease"
          className="action-icons"
          src="/images/decrease.svg"
          onClick={() => { setProductQuantity(product.index, product.quantity - 1) }}
        />
        <span className="quantity">
          {product.quantity}
        </span>
        <img
          alt="increase"
          className="action-icons"
          src="/images/increase.svg"
          onClick={() => { setProductQuantity(product.index, product.quantity + 1) }}
        />
      </div>

      <div className="buy_block">
        <button
          className="btn"
          disabled={product.quantity === 0}
          onClick={() => { displayProduct(product) }}>
          Buy Ticket
        </button>
      </div>
    </div>
  );
}

export default Product;
