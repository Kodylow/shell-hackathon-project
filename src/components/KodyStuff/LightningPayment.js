import React, {useState, useEffect} from "react";
import LNPay from "lnpay";
import QRCode from "qrcode.react";
import useInterval from "./useInterval";

function LightningPayment({setShowModal, setPaidTx, quantity, code}) {

  const [invoice, setInvoice] =useState(false);

  const checkForTx = async () => {
    const lnpay = LNPay({
      secretKey: "pak_kKSYwVCK28TY7tcP9uJxWM0BYLnsdP"
    });
    return await lnpay.getInvoice({
      id: invoice.id
    });
  };

  useInterval(async () => {
    checkForTx().then((res) => {
      if (res.settled === 1) {
        console.log(res);
      }
      setPaidTx(res.settled);
    });
  }, 1000);

  useEffect(() => {
    console.log('code: ' + code);
    const lnpay = LNPay({
      secretKey: "pak_kKSYwVCK28TY7tcP9uJxWM0BYLnsdP",
      walletAccessKey: "waki_fmRmyHa9yKW0FwkrAz5Ji5lX",
    });
    const invoice = async () => {
      return await lnpay.generateInvoice({
        num_satoshis: quantity * 10,
        passTru: {
          order_id: "10",
        },
        description_hash: "Your ticket has been purchased, please check your email in a few seconds. Confirmation Code: " + code,
        memo: "Invoice memo.",
        expiry: 300000, // 5 Minutes
      });
    };
    invoice().then((res) => {
      return res;
    }).then(data => setInvoice(data));
  }, []);

  return (invoice ? (
  <div>
    <QRCode value={invoice.payment_request} />
    <h4>{invoice.num_satoshis} SAT (1 sat = 0.00000001 BTC)</h4>
  </div>
   ) : <div/>);
}

export default LightningPayment;
