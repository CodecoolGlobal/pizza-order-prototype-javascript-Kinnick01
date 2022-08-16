const express = require("express");
const fs = require("fs");
const path = require("path");
//const package = require("./menu.json")

const app = express();
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));


const pizzaRouter = require("./routers/pizzas")
app.use("/api/pizza", pizzaRouter)

const allergensRouter = require("./routers/allergens")
app.use("/api/allergens", allergensRouter)

app.get('/', function(req, res){
    let package = JSON.parse(fs.readFileSync("./menu.json"));
    res.render("index", { welcome: `ezt a fos szart baszki!!!`})
    });
app.get('/pizza/list', function(req,res){
    let package = JSON.parse(fs.readFileSync("./menu.json"));
    res.render("menu", {pizzasList: package.pizzas})
})
app.get('/myorder', function(req,res) {
    let package = JSON.parse(fs.readFileSync("./order.json"));
    res.render()
})
app.post("/myorder", function(req,res){
    // res.json(req.body);
    // let package = JSON.parse(fs.readFileSync("./order.json"))
    // const newPackage = req.body;
    // package.pizza.push(newPackage)
    // fs.writeFileSync(./order.json,JSON.stringify(package,null,2));
    fs.readFile("./order.json", (err,data) => {
        if (err) {
            throw err;
        }
        else {
            const package = JSON.parse(data);
            let newPackage = req.body;
            package.orders.push(newPackage);
            fs.writeFile("./order.json", JSON.stringify(package,null,2),(err)=>{
                if(err){
                    throw err;
                }
                else{
                    res.send("done")
                }
            });

        }
    })
})
// async function listPizzas(){
//     await fetch(http://127.0.0.1:9001/api/pizzas/)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
// });
// };





const port = 9001;

// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(${__dirname}/../frontend/index.html));
// });

app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));
