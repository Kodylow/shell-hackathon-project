import './index.scss';
import React, { useState, useEffect } from "react";
import mempoolJS from "@mempool/mempool.js";
import QRCode from "qrcode.react";
import useInterval from "./useInterval";

function BitcoinPayment() {
  const [paidTx, setPaidTx] = useState([]);

  const {
    bitcoin: { addresses },
  } = mempoolJS({
    hostname: "mempool.space",
  });

  const checkForTx = async () => {
    const address = "1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv";
    return await addresses.getAddressTxs({ address });
  };

  useInterval(async () => {
    checkForTx().then((res) => {
      setPaidTx(res);
    });
  }, 5000);

  return (
    <div className="BitcoinPayment">
      <h3>Pay With Bitcoin</h3>
      {paidTx.length > 0 ? (
        <img
          className="qr-code"
          src="./check02.gif"
          alt="checkmark"
        />
      ) : (
        <QRCode
          className="qr-code"
          value="39NKXrngy9wSDQqQZ5WLZykfpmV3c9SqsL" />
      )}
      <h3>Pay With Lightning</h3>
      <QRCode
        className="qr-code"
        style={ {marginBottom:"50px"} }
        value="LNURL1DP68GURN8GHJ7MRWVF5HGUEWVDHK6TMVDE6HYMRS9ASHQ6F0WCCJ7MRWW4EXCTECXSEQGY3KV0" />
    </div>
  );
}

export default BitcoinPayment;
