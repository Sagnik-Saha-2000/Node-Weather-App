
const express = require("express");
const app = express();
const hbs=require("hbs");
const port = process.env.PORT || 3000 ;
const staticPath="D:/Node/expressweb/public";
const template_path="D:/Node/expressweb/src/templates/views";
const partials_path="D:/Node/expressweb/src/templates/partials";


app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));




app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log(`listening to the port no. ${port}`);
});