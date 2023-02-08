const express = require("express");
const app = express();
/* const path = require("path"); */


/* enrutadores */
const mainRouter = require("./routers/main");


/* rutas */
app.use(express.static("public"));

app.use("/", mainRouter );



app.listen(3000, ()=>{
    console.log("servidor funcionando");
});