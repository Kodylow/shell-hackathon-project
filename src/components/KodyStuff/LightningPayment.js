import React, {useState, useEffect} from "react";
import LNPay from "lnpay";
import QRCode from "qrcode.react";

function LightningPayment() {

  const [paidTx, setPaidTx] = useState([]);
  const [invoice, setInvoice] =useState(false);

  useEffect(() => {
    const lnpay = LNPay({
      secretKey: "pak_kKSYwVCK28TY7tcP9uJxWM0BYLnsdP",
      walletAccessKey: "waki_fmRmyHa9yKW0FwkrAz5Ji5lX",
    });
    const invoice = async () => {
      return await lnpay.generateInvoice({
        num_satoshis: 100,
        passTru: {
          order_id: "100",
        },
        description_hash: "MTIzNDY1Nzg5N...",
        memo: "Invoice memo.",
        expiry: 86400, // 1 day
      });
    };
    invoice().then((res) => res.payment_request).then(url => setInvoice(url));
  }, []);

  return (invoice ? <QRCode value={invoice} /> : <div/>);
}

export default LightningPayment;