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

app.get("/bmicalculator", (req,res) => {
    console.log("Serving: "+__dirname+"\\bmiCalculator.html");
    res.sendFile(__dirname+"\\bmiCalculator.html");
});


app.post("/bmicalculator", (req,res) => {
    console.log(req.body);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight+height;
    var bmi = weight/(height*height)
    res.send("Thank you for posting your personal mesurements. [Weight: "+weight+" + Height:"+height+" = BMI:"+bmi+"]");
});

app.listen(PORT, () => console.log('Server is listening on port: '+PORT));
