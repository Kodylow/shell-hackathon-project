import './index.scss';
import ProductList from '../../components/ProductList';
import Modal from '../../components/Modal';
import { useState } from 'react';

function Home({ headerUnderJumbo }) {
  const [products] = useState([
    {
      artist: 'Beyonce',
      image: '/images/beyonce.jpeg',
      date: 'SEP 26',
      time: '7:30pm',
      venue: 'Culture Room',
      location: 'Fort Lauderdale, FL'
    },
    {
      artist: 'Parcels',
      image: '/images/parcels.jpeg',
      date: 'SEP 26',
      time: '9:00pm',
      venue: 'Hard Rock Live',
      location: 'Hollywood, FL'
    },
    {
      artist: 'Daft Punk',
      image: '/images/daft_punk.jpeg',
      date: 'SEP 26',
      time: '8:00pm',
      venue: 'Hard Rock Stadium',
      location: 'Miami, FL'
    },
    {
      artist: 'Kendrick Lamar',
      image: '/images/kendrick.jpeg',
      date: 'SEP 27',
      time: '8:00pm',
      venue: 'BB&T Center',
      location: 'Sunrise, FL'
    },
    {
      artist: 'Bruno Mars',
      image: '/images/bruno-mars.jpeg',
      date: 'SEP 27',
      time: '8:00pm',
      venue: 'Hard Rock Stadium',
      location: 'Miami, FL'
    },
    {
      artist: 'Billie Eillish',
      image: '/images/billie_eillish.jpeg',
      date: 'SEP 27',
      time: '7:30pm',
      venue: 'Culture Room',
      location: 'Fort Lauderdale, FL'
    },
    {
      artist: 'Lorde',
      image: '/images/lorde.jpeg',
      date: 'SEP 28',
      time: '9:00pm',
      venue: 'Hard Rock Live',
      location: 'Hollywood, FL'
    },
    {
      artist: 'Kanye West',
      image: '/images/kanye.jpeg',
      date: 'SEP 28',
      time: '8:00pm',
      venue: 'BB&T Center',
      location: 'Sunrise, FL'
    },
    {
      artist: 'Taylor Swift',
      image: '/images/taylor_swift.jpeg',
      date: 'SEP 28',
      time: '8:00pm',
      venue: 'Hard Rock Stadium',
      location: 'Miami, FL'
    },
    {
      artist: 'Future',
      image: '/images/future.jpeg',
      date: 'SEP 29',
      time: '7:30pm',
      venue: 'Culture Room',
      location: 'Fort Lauderdale, FL'
    },
    {
      artist: 'Guns & Roses',
      image: '/images/gunsnroses.jpeg',
      date: 'SEP 29',
      time: '9:00pm',
      venue: 'Hard Rock Live',
      location: 'Hollywood, FL'
    },
    {
      artist: 'Ed Sheeran',
      image: '/images/ed_sheeran.jpeg',
      date: 'SEP 29',
      time: '8:00pm',
      venue: 'BB&T Center',
      location: 'Sunrise, FL'
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  const displayProduct = (product) => {
    setShowModal(true);
    setModalProduct(product);
  };


  return (
  <div className="Home">
    <header id="header" className={(() => (headerUnderJumbo) ? 'under_jumbo' : '')()}>
      <div className="container container-wide">
        <h2 className="logo">CryptoTickets</h2>
      </div>
    </header>
    <div id="jumbo">
      <div className="container">
        <h2>Let's Make Crypto Happen</h2>
        <p>Shop amazing live concerts and discover the capabilities of cryptocurrencies by making your purchase with Bitcoin (BTC).</p>
      </div>
    </div>

    <main id="main">
      <div className="container">
        <h2>All Concerts Near Miami, FL ({products.length})</h2>
        <ProductList
          products={products}
          displayProduct={displayProduct} />
      </div>
    </main>

    <footer id="footer">
      <h2 className="logo">CryptoTickets</h2>
      <p>Sponsored by Shellhacks.</p>
    </footer>

    { showModal ? <Modal product={modalProduct} setShowModal={setShowModal} /> : null }
  </div>
  );
}

export default Home;
