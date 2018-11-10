var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.static(path.join(__dirname, "public")));

app.get("/getCMSData", function(req, res) {
    console.log("req.params.reqURL->"+ JSON.stringify(req.query.reqURL))

    var carr = [];
    if(req.query.reqURL === "/"){
        carr.push({
            component: "Comp1",
            data: {
                title: 'Comp1',
                id: 1
            }
          });
          carr.push({
            component: "Comp2",
            data: {
                title: 'Comp2',
                id: 2
            }
          })
    }else if(req.query.reqURL === "/page1"){
        carr.push({
            component: "Comp1",
            data: {
                title: 'Comp1',
                id: 1
            }
          });
    }else if(req.query.reqURL === "/page2"){
        carr.push({
            component: "Comp2",
            data: {
                title: 'Comp2',
                id: 2
            }
          });
    }
    
    var data = ({
        compArr: carr
    });
    res.json(data);

});

var server = app.listen(3008, function () {
    console.log("Listening on port %s...", server.address().port);
});
process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
