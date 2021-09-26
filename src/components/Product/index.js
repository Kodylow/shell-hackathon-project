import './index.scss';
import { useState } from 'react';

function Product({ product, displayProduct }) {
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

      <div className="buy_block">
        <button
          className="btn"
          onClick={() => { displayProduct(product) }}>
          Buy Ticket
        </button>

        <img
          alt="increase"
          className="action-icons"
          src="https://image.flaticon.com/icons/svg/992/992651.svg"

        />
        <img
          alt="decrease"
          className="action-icons"
          src="https://image.flaticon.com/icons/svg/1665/1665612.svg"

        />
        <img
          alt="delete"
          className="action-icons"
          src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
        />

      </div>
    </div>
  );
}

export default Product;
