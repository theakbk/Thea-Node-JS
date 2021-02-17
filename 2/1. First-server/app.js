const express = require ("express")
const app = express();

app.get("/list", (req, res) => 
{
    res.send(heste)
});

app.get("/get/:id", (req, res) => 
{
    let hest = heste[req.params.id];

    if (hest === undefined)
    {
        res.status(404).send("id not found");
    }
    
    res.send(heste[req.params.id])
});


app.get("/delete/:id", (req, res) => 
{
    delete heste[req.params.id]
    //res.send(heste[req.params.id])
    res.send(heste);
});



const heste = {
    
    "DK2000101554" : 
    {
       "name" : "Baldur",
       "id" : "DK2000101554",
    },
    
    DK200210 : 
    {
        "name": "Golsi",
        "id": "DK200210"
    },

    DK2007107134 :
    {
        "name": "Strakur",
        "id": "DK2007107134"
    }

 }


for (let hest in heste)
{
    console.log("hest " + hest);
}

app.listen(8080);