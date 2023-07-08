const http = require('http');
const fs = require('fs');  


const  PORT = 4000;
const hostName = 'localhost';
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
    // res.end("working again" );

    if(req.url=== "/"){
        return res.end(home);
        }

    if(req.url=== "/about"){
        return res.end("<h1>About page</h1>" );
    }
    if(req.url=== "/contact"){
        return res.end("<h1>contact page</h1>" );
    }
        if(req.url=== "/service"){
            return  res.end("<h1>service page</h1>" );
        }

        else{
            res.end("<h1>404 page not found!!</h1>" );
        }

});

server.listen(PORT, hostName, ()=>{
    //console.log("server is running on http://localhost:4000");
    console.log(`server is running on http://${hostName}:${PORT}`);
});
