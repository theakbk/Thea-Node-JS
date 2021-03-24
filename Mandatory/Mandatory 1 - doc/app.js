
const express = require ("express")
const app = express()

app.use(express.json())
app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/opstart", (req, res) => {
    res.sendFile(__dirname + "/public/opstart.html");
});

app.get("/online", (req, res) => {
    res.sendFile(__dirname + "/public/online.html");
});

app.get("/cheat", (req, res) => {
    res.sendFile(__dirname + "/public/cheatsheet.html");
});

app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/public/Tools.html");
});

app.get("/intro", (req, res) => {
    res.sendFile(__dirname + "/public/intro.html");
});

app.get("/crud", (req, res) => {
    res.sendFile(__dirname + "/public/CRUD.html");
});

app.get("/advanced", (req, res) => {
    res.sendFile(__dirname + "/public/advanced.html");
});

//console.log(37+4)

let x = 5
const s = "hunden er fin"

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});



