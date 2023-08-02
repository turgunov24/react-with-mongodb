// imports
import express from "express";
import process from "process";
import dotenv from "dotenv"

// defines
const PORT = 5000;
const app = express();
dotenv.config()



app.get("/hey", (req, res) => {
  res.send("hello world");
});

// others
app.listen(PORT, () => console.log("listening on port: ", process.env.hey));
