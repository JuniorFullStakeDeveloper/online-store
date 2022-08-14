let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors())
app.use(express.json());
let mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

console.log("no");
app.use("/api/products", require("./router/Products.router"))
app.use("/api/category", require("./router/PopularCategory.router"))
app.use("/api/users", require("./router/User.router"))


mongoose 
 .connect(process.env.DBCONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true})   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log("err", err, "error"));

app.listen(process.env.PORT, (req, res) => {
  console.log(`port ${process.env.PORT} has been started`);
});
