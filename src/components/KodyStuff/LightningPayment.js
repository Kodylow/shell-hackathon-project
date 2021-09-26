import React, {useState, useEffect} from "react";
import LNPay from "lnpay";
import QRCode from "qrcode.react";
import useInterval from "./useInterval";

function LightningPayment({setShowModal, setPaidTx}) {

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
      setPaidTx(res.settled);
    });
  }, 5000);

  useEffect(() => {
    const lnpay = LNPay({
      secretKey: "pak_kKSYwVCK28TY7tcP9uJxWM0BYLnsdP",
      walletAccessKey: "waki_fmRmyHa9yKW0FwkrAz5Ji5lX",
    });
    const invoice = async () => {
      return await lnpay.generateInvoice({
        num_satoshis: 10,
        passTru: {
          order_id: "10",
        },
        description_hash: "MTIzNDY1Nzg5N...",
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
    <QRCode value={invoice.payment_request} style={{width:'300px', height:'300px'}}/>
    <p>{invoice.num_satoshis} sats</p>
  </div>
   ) : <div/>);
}

export default LightningPayment;