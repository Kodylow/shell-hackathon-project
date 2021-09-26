import './index.scss';
import LightningPayment from '../KodyStuff/LightningPayment';
import {useState} from 'react';

function Modal({product, setProductQuantity, setShowModal}) {
  const [paidTx, setPaidTx] = useState(0)
  const randomCode = () => {
    var chars = [
     "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // letters_upper
  	 "abcdefghijklmnopqrstuvwxyz", // letters_lower
     "0123456789", // numbers
    ];

    return [10, 10, 10].map(function(len, i) {
      return Array(len).fill(chars[i]).map(function(x) {
        return x[Math.floor(Math.random() * x.length)];
      }).join('');
    }).concat().join('').split('').sort(function(){
      return 0.5-Math.random();
    }).join('')
  }
  const code = randomCode();

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
          <hr />
          {paidTx === 0 ? (
            <>
            <h4>{product.quantity} tickets</h4>

            <LightningPayment
              setShowModal={setShowModal}
              setPaidTx={setPaidTx}
              code={code}
              quantity={product.quantity} />
            </>
        ) : (
          <>
          <h4>Your ticket has been purchased, please check your email in a few seconds.</h4>
          <p>Confirmation Code: {code}</p>
          </>
        )}
        </div>
    </div>
  </div>
  );
}

export default Modal;
