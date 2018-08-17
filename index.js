const express = require("express");
const app = express();
const http = require("http").Server(app);
const scheme = require('schemejs');
const fs = require('fs');
const cors = require('cors');
const rss = require('./rss.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors())

eval(fs.readFileSync("./api.js").toString());
var s = new scheme(apijs);

const megaquery = require('megaquery');

app.post("/api", (req,res) => {
  if (req.body.store) {
    s.rag(req.body.store).then((data) => {
      console.log(data);
      res.json(data);
    });
  }
});

app.use('/js',express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use("/assets", express.static(__dirname + '/public/assets'));

app.get("/", (req,res) => {
  res.sendFile(__dirname+"/public/index.html");
})

http.listen(8181, ()=>{
  console.log('GitTexts is running');
});

rss();
