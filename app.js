const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.dirname + "index.html"));

app.listen(3000, () => console.log("http://127.0.0.1:3000"));
