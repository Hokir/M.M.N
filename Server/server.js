require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = require("./Routes/Users");
const shopRoute = require("./Routes/Shop");
const adminRoute = require("./Routes/Admin");

app.use("/users", userRoute);
app.use("/shop", shopRoute);
app.use("/admin", adminRoute);

// Run server on configured port
const port = process.env.PORT;

app.listen(port, console.log(`Server listening on port ${port}`));
