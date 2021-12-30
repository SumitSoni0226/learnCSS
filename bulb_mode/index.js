const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// parse application/vnd.api+json as json
app.use(express.json({ type: "application/vnd.api+json" }));

app.use(express.static("bulb_mode/public"));

app.use(function (req, res, next) {
  const string = `${req.method} ${req.originalUrl}`;
  console.log(string); // populated!
  next();
});

app.get("/", (req, res) => {
  res.sendFile("bulb_mode/index.html");
});

app.get("/live", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Srver is live on this link : http://localhost:3000/live");
});
