const express = require("express");
const cors = require("cors");

const app = express();

// const mempoolJS = require("@mempool/mempool.js");

// const mempoolStuff = async () => {
//   const {
//     bitcoin: { addresses },
//   } = mempoolJS({
//     hostname: "mempool.space",
//   });
//   const address = "39NKXrngy9wSDQqQZ5WLZykfpmV3c9SqsL";
//   const addressTxsMempool = await addresses.getAddressTxsMempool({ address });
//   return addressTxsMempool;
// };

// const init = async () => {
//   const {
//     bitcoin: { websocket },
//   } = mempoolJS({
//     hostname: "mempool.space",
//   });

//   const ws = websocket.initServer({
//     options: ["blocks", "stats", "mempool-blocks", "live-2h-chart"],
//   });

//   ws.on("message", function incoming(data) {
//     const res = JSON.parse(data.toString());
//     if (res.mempoolInfo) {
//       console.log("mempoolStuff", mempoolStuff());
//     }
//   });
// };
// init();

app.get("/api/customers", cors(), (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
