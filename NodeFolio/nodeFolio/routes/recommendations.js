const router = require("express").Router();


const recommendations = [{
    title: "SmartTV A/S",
    description: "Mindre IT-firma indenfor TV",
    contact: "Per Baatrup, direktør - tlf 21 44 09 39"
}, 

{
    title: "Kea Erhversakademi",
    description: "Datamatiker-uddannelse",
    contact: "Cay Holmegaard, Underviser - cahl@kea.dk"
}
];

router.get("/api/recommendations", (req, res) => {
    res.send({ recommendations });
});

module.exports = {
    router
};