const express = require('express');

const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me at  my_email@....com");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});