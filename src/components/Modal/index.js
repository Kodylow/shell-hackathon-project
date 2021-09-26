import './index.scss';
import LightningPayment from '../KodyStuff/LightningPayment';
import {useState} from 'react';

function Modal({product, setShowModal}) {
  const [paidTx, setPaidTx] = useState(0)

  return (
  <div className="Modal">
    <div className="modal_inner">
        <div className="close_wrapper">
          <span
            className="close_icon"
            onClick={() => { setShowModal(false) }}>x</span>
        </div>
        <div className="content_wrapper">
          <h2 className="artist_block">
            <strong>{product.artist}</strong>
          </h2>

          <img src={product.image} alt={product.artist} className="event_image"/>

          <p className="date_time_block">
            <strong>{product.date} - {product.time}</strong>
          </p>

          <p className="venue_block">{product.venue} - {product.location}</p>

          {paidTx === 0 ? <LightningPayment setShowModal={setShowModal} setPaidTx={setPaidTx} /> : <p>Paid!!</p>}
        </div>
    </div>
  </div>
  );
}

export default Modal;
