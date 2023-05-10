const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    let restaurants = await Restaurant.findAll();
    res.json(restaurants);
})

app.get("/restaurants/:id", async (req, res) => {
    let id = req.params;
    let restaurant = await Restaurant.findByPk(id);
    res.json(restaurant);
})

app.use(express.json);
app.use(express.urlencoded);
app.post("/restaurants", async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
})

app.put("/restaurants/:id", async (req, res) => {
    const updated = await Restaurant.update(req.body, {where: {id: req.params.id}});
    res.json(updated);
})

app.delete("/restaurants/:id", async (req, res) => {
    const deleted = await Restaurant.destory({where: {id: req.params.id }});
    res.json(deleted);
})








module.exports = app;