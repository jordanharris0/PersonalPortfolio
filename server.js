const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./prisma");
const cors = require("cors");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(require("morgan")("dev"));

app.use(
  cors({
    origin: "https://jordanharris.gg", // Only allow your frontend origin
    credentials: true, // Allow credentials such as Authorization headers or cookies
  })
);

//contact form route
app.use("/contact", contactRoutes);

//port
const PORT = process.env.PORT || 12000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
