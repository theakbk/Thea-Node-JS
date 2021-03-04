const express = require ("express")
const app = express();

app.use(express.json());


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



//Post
app.post("/create", (req, res) => {

    console.log(req.body)
    console.log("id = " + req.body.id + " Name = " + req.body.name)

    if (req.body.id in heste)
    {
        return res.send({status: "ID already exists"})
    }
    heste[req.body.id] = req.body
    res.send({ status: "200 ok"})
});



app.delete("/delete/:id", (req, res) => 
{
    delete heste[req.params.id]
    //res.send(heste[req.params.id])
    res.send(heste);
});

app.put("/update/:id", (req, res) => {
    console.log(req.body)
    console.log("id = " + req.params.id + " Name = " + req.body.name)

    if (!(req.params.id in heste))
    {
        return res.send({status: "404 not found"})
    }

    //Opdater og overskriv hele Json. Med risiko for slette felter der ikke skal opdateres
    //heste[req.params.id] = req.body


    //Opdater enkelte felter, uden risiko for slettede felter
    for (let m in req.body)
    {
        if (m != "id")
        {
          let hest=heste[req.params.id]
          hest[m] = req.body[m]
        }
    }
    
    //heste[req.body.id] = req.body
    res.send({ status: "200 ok"})
})



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