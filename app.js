const express = require("express");
const products = require("./data");
let accounts = require("./accounts");
const router = require("./api/accounts/routes");
const app = express();

app.get("/api/products", (req, res) => res.status(200).json(products));


app.use("/accounts",router)
  





app.listen(8000, () => {
  console.log("tahani workinggg ....");
});
