const { log } = require("console");
const express = require("express");
const router = express.Router();
const fs = require('fs');
const pkgs = fs.readFileSync("menu.json");
const package = JSON.parse(pkgs);

router
.route("/:id")

.get((req, res) => {
	res.send(`<h2>${JSON.stringify(package.pizza[Number(req.params.id)-1])}</h2>`);
})
// .post((req, res) => {
// 	res.send(`Youve got a post`);
// 	const newPackage = req.body;
// 	package.packages.push(newPackage)
// 	fs.writeFileSync(`menu.json`,JSON.stringify(package));
// 	// file written successfully
// })

router
.route("/")
.get((req, res) => {
	res.json(package.pizzas);
})

.get((req, res) => {
	res.json(package.allergens);
})
// .post((req, res) => {
// 	res.send(`Youve got a post`);
// 	const newPackage = req.body;
// 	package.packages.push(newPackage)
// 	fs.writeFileSync(`./backend/pkgs.json`,JSON.stringify(package));

// })

module.exports = router