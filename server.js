const express = require("express");
const fs = require("fs");
const path = require("path");
const pkgs = fs.readFileSync("menu.json");
const package = JSON.parse(pkgs);

const app = express();
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const pizzaRouter = require("./routers/pizzas")
app.use("/api/pizza", pizzaRouter)

const allergensRouter = require("./routers/allergens")
app.use("/api/allergens", allergensRouter)

app.get('/', function(req, res){
    res.render("index", { text: `ezt a fos szart baszki!!!`})
    });
app.get('/pizza/list', function(req,res){
    res.render("index", {text: JSON.stringify(package)})
})

// async function listPizzas(){
//     await fetch(`http://127.0.0.1:9001/api/pizzas/`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
// });
// };





const port = 9001;

// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
// });

app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));