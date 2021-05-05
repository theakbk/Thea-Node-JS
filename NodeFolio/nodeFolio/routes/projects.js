const router = require("express").Router();


const projects = [
{
    title: "Nodefolio",
    description: "Personal portfolio implemented in Node.js",
    images: ["/Images/IngenBillede.jpg"],
    iIdx: 0
}, 

{
    title: "Some exam project",
    description: "Exam project implemented in NodeJS",
    images: ["/Images/IngenBillede.jpg"],
    iIdx: 0
},

{
    title: "MyFirnessApp",
    description: "IOS fitness app written implemented in Swift",
    images: ["/Images/F-app.png", "/Images/F-app2.jpg"],
    iIdx: 0
},

{
    title: "Students database",
    description: "REST API using java as backend, with the mySQL database",
    images: ["/Images/database.png", "/Images/StudentDB.png"],
    iIdx: 0
},

{
    title: "Abrahamsen VVS",
    description: "Thymeleaf webpage, CICD pipeline, hosted on AWS",
    images: ["/Images/Abrahamsen.png", "/Images/abra2.jpg"],
    iIdx: 0
},

{
    title: "Adventure Alley",
    description: "Thymeleaf webpage, done in a Scrum team, primarily following the XP methodology",
    images: ["/Images/IngenBillede.jpg"],
    iIdx: 0
}

];


router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};