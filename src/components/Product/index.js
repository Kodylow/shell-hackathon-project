import './index.scss';

function Product({ product }) {
  return (
  <div className="Product">
    <div className="image_block">
      <img src={product.image} alt={product.artist} className="event_image"/>
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
      <button className="btn">
        Buy Ticket
      </button>
    </div>
  </div>
  );
}

export default Product;
