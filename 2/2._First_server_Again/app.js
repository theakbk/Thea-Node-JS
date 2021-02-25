import express from "express";
const app = express();

//Get
app.get("/", (req, res) => 
{
    //Send an empty Json as response
    res.send({msg: 'Hello World'});
});

app.get("/time", (req, res) => {
    let d = new Date();

    res.send({time: d.getHours()+":"+d.getMinutes() + ":" + d.getSeconds()})
})

app.get("/day", (req, res) => {
    let d = new Date();

    let days = ["Mandag", "Tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"];

    res.send({day: days[d.getDay() - 1]})
})

app.get("/month", (req, res) => {
    let d = new Date();

    let months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

    res.send({month: months[d.getMonth()]})
})

app.listen(8080);

