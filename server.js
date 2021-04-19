const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(__dirname+"/dist/template-vide-angular"))


app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+"/dist/template-vide-angular/index.html"))
})


app.listen(process.env.PORT)