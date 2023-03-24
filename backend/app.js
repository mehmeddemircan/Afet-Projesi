require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const WebSocket = require('ws');
const Location = require("./models/Location");
// Connecting to db

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// middlewares
app.use(cors());

connectDB();


// Set up WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Handle WebSocket connections
wss.on('connection', ws => {
  console.log('WebSocket connection established');

  // Send location data to client
  Location.watch().on('change', change => {
    ws.send(JSON.stringify(change.fullDocument));
  });
});

// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// // autoloading routes
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

// Routes
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("Homepage");
});

app.listen(PORT, () =>
  console.log(`Server Started at Port ${PORT}
=>https://mernafetbackend.onrender.com/`)
);
