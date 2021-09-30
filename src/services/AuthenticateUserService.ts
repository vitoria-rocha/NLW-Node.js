import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { UsersRepositories } from "../repositories/UsersRepositories"



interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);
    
    //verificar email existe?
    const user = await userRepositories.findOne({
      email
    });

    if (!user){
      throw new Error("Email/password incorrect");
    }

    //verificar senha correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch){
      throw new Error("Email/password incorrect");
    }

    //gerar token
    const token = sign (
      {
        email: user.email
      }, 
      "c3bb6f719742fd1e5768d6d1361cfb49",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };