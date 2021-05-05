require('dotenv').config()
const express = require ("express");
const app = express();


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");
const skillsRouter = require("./routes/skills.js");
const recommendationsRouter = require("./routes/recommendations.js");


app.use(projectsRouter.router);
app.use(contactRouter.router);
app.use(skillsRouter.router);
app.use(recommendationsRouter.router);

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const eduPage = fs.readFileSync(__dirname + "/public/Education/education.html", "utf-8");
const skillsPage = fs.readFileSync(__dirname + "/public/Skills/skills.html", "utf-8");
const recommendationsPage = fs.readFileSync(__dirname + "/public/Recommendations/recommendations.html", "utf-8");



app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});

app.get("/education", (req, res) => {
    res.send(header + eduPage + footer);
});

app.get("/skills", (req, res) =>{
    res.send(header + skillsPage + footer)
})

app.get("/recommendations", (req, res) =>{
    res.send(header + recommendationsPage + footer)
})



const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on", server.address().port);
});

