const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static("public"));

const port = process.env.PORT

app.get("/", function(req, res){
  res.sendFile(__dirname + "public/index.html")
});

app.listen(port, function(){
  console.log(`Working on ${port}`)
});