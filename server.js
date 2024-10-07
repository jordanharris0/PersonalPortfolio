const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./prisma");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(require("morgan")("dev"));

//contact form route
app.use("/contact", contactRoutes);

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
