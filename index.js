const express = require("express");
const app = express();
const routes  = require("./src/routes/index.js");
require("custom-env").env("development");
const cookieParser = require('cookie-parser');
const cors = require("cors")

app.use(cors({
    credentials: true 
}))
app.use(cookieParser())
app.use(express.json());
app.use(routes);
let port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log("app listen to " ,port)
})