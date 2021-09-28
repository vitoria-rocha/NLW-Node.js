import "reflect-metadata"; 
import express from "express";

const app = express();

app.listen(8080, () => console.log("server is running: http://localhost:8080"));