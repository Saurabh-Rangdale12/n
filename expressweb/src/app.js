const express= require("express");
const app = express();
const path= require("path");
const hbs=require("hbs");
const port= process.env.PORT || 3000;

const staticpath= path.join(__dirname, "../public");

app.use(express.static(staticpath));
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/weather", (req, res)=>{
    res.render("weather");
})
app.get("/*", (req, res)=>{
    res.render("errorpg");
})
app.listen(port, ()=>{
    console.log(`listening from port number ${port}`);
})