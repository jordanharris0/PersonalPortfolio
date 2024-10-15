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
    origin: "http://localhost:5173", // Only allow your frontend origin
    credentials: true, // Allow credentials such as Authorization headers or cookies
  })
);

//contact form route
app.use("/contact", contactRoutes);

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
