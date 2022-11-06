const express= require("express");
const app = express();
const port= process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Hello from othet side");
})
app.get("/about", (req, res)=>{
    res.send("Hello from about page");
})
app.get("/*", (req, res)=>{
    res.send("Error 404");
})

app.listen(port, ()=>{
    console.log(`listening from port number ${port}`);
})