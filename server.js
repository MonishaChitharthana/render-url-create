const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let storedData = {};

// Endpoint to receive and store data in memory
app.post("/send-data", (req, res) => {
  storedData = req.body;
  console.log("Received data:", storedData);
  res.status(200).send("Data stored successfully.");
});

// Endpoint to fetch stored data
app.get("/get-data", (req, res) => {
  res.status(200).json(storedData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
