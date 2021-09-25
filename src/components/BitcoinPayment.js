import React, { useState } from "react";
import mempoolJS from "@mempool/mempool.js";
import QRCode from "qrcode.react";

function BitcoinPayment() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="BitcoinPayment">
      <p>Bitcoin Payment</p>
      <QRCode value="39NKXrngy9wSDQqQZ5WLZykfpmV3c9SqsL" />
      <p>Lightning Payment</p>
      <QRCode value="LNURL1DP68GURN8GHJ7MRWVF5HGUEWVDHK6TMVDE6HYMRS9ASHQ6F0WCCJ7MRWW4EXCTECXSEQGY3KV0" />
    </div>
  );
}

export default BitcoinPayment;
