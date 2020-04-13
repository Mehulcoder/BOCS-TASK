var express = require("express");


var app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    console.log("Server is on port " + port);
});