const express=require("express");
const path=require("path")
 const hbs=require("hbs")

const port=process.env.PORT || 3000
const app=express();
// const staticpath=path.join(__dirname,"/public/")
// console.log(staticpath)
// app.use(express.static(staticpath))
const templetepath=path.join(__dirname,"/templates/views")
const partialpath=path.join(__dirname,"/templates/partials")
app.set("view engine","hbs")
app.set("views",templetepath)
hbs.registerPartials(partialpath);
app.get("/",(req,res)=>{
    res.render("index1")
})
app.get("/about",(req,res)=>{
    res.render("about",{name:"piyush"})
})








app.listen(port,(error,result)=>{
    console.log(`server started successfully at port number ${port}`)
})