import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload{
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){

  //receber token
  const authToken = request.headers.authorization;  
  
  //validar se token esta preenchido
  if(!authToken){
    return response.status(401).end();
  }

  const [,token] = authToken.split(" ")

  try{
    //validar se o token eh valido
    const { sub } = verify(token, "c3bb6f719742fd1e5768d6d1361cfb49") as IPayload;
    //console.log(decode); //mostra no terminal

    request.user_id = sub;
    
    
    return next();
  } catch (err){
    return response.status(401).end();
  }
  
  
  //recuperar informaçoes do usuario
}