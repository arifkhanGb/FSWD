const express = require("express");
 const path = require("path");
const bodyParser = require("body-parser");//(middleware) body access krna ke liye
const router = require("./UserRoutes");


const app= express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);//errior

app.get("/", (req, res)=>{
   res.sendFile(path.join(__dirname + "./index.html"))

}); 

// app.post("/api/v1/login", (req,res) =>{
//     res.send(`<h1>DONE MR.${req.body.name}</h1> <h1>${req.body.mail}<h1/> <h1>${req.body.password}<h1/>`);
//     console.log(req.body);
// })

// making api


//get access by default
// app.get("/api/v1/userdata", (req,res)=>{
//     res.json({
//         name: "arif",
//         email: "abx@gmail.com",
//         password: "1221",
//     })
// });

//api





app.listen(port, () =>{
    console.log(`server is working on port ${port}`);
})