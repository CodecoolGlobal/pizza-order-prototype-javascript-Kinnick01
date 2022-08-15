const express = require("express");
const fs = require("fs");
const dataRoute = "pizzas.json";
const path = require("path");

const app = express();
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const pizzaRouter = require("./routers/routers")
app.use("/api/pizzas", pizzaRouter)

const allergensRouter = require("./routers/routers")
app.use("/api/allergens", allergensRouter)




const port = 9001;

// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
// });

app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));