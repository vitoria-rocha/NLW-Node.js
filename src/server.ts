import express from "express";
import { request } from "http";

const app = express();

/*
GET => buscar uma informaçao (listagem de contatos)
POST => inserir uma informaçao dentro da API (criar usuario)
PUT => alterar uma informaçao (alterar dados do usuario email, senha)
DELETE => remover um dado produto ou usuario
PATCH => alterar uma informacao especifica
*/

app.get("/test", (request, response) =>{
  //response = entrando
  //request = saindo
  return response.send("metodo get")
});

app.post("/test-post", (request, response) =>{
  return response.send("metodo post")
});

app.listen(8080, () => console.log("server is running: http://localhost:8080"));