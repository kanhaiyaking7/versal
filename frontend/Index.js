const express = require("express");
const app = express();

let books = [{id:1,title:"mind control",author:"gp"},
{id:2,title:"rich mind",author:"king"}]

app.get("/",(req,res)=>{
    res.send("hi");
    console.log('as');
})

app.get("/books",(req,res)=>{
    res.send(books);
})


app.listen(8000,()=>{
    console.log('start');
})