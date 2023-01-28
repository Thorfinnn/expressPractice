let express = require('express');
let app = express();
app.set('json spaces',2);
app.use('/public',express.static(__dirname+"/public"));

app.get('/json',(req,res)=>{
    res.json({
        message: "Hello json"
    });
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/veiws/index.html");
});




































 module.exports = app;
