//jshint esversion:6

const express = require('express');
const app = express();
const body = require('body-parser');
app.use(body.urlencoded({extended: true})); //urlencoded is for parsing forms
const PORT = process.env.PORT || 5000;


app.get("/", (req,res) => {
    console.log("Serving: "+__dirname+"\\index.html");
    res.sendFile(__dirname+"\\index.html");
});

app.post("/", (req,res) => {
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("Thank you for posting that. ["+num1+" + "+num2+" = "+result+"]");
});

app.listen(PORT, () => console.log('Server is listening on port: '+PORT));
