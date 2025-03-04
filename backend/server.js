const express = require('express');

const app = express();



app.get('/', (reg,res) => {
    res.send('request received');
})


app.listen(3050, "localhost", () =>{
    console.log("bald wird es Mittagspause")
})