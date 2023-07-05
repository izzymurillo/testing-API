const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config(); //method to initialize

const izzy = process.env.NAME;
console.log(izzy);

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const port = process.env.PORT || 8000;
const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
