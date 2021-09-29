import { UsersRepositories } from "../repositories/UserRepositories"


interface UserRequest{
  name: string;
  email: string;
  admin?: boolean; //?opcional
}

class CreateUserService {
  async execute({ name, email, admin} : UserRequest) {
  
    const usersRepositories = new UsersRepositories();
    
    if(!email){
      throw new Error("Email incorrect")
    }
    //verificar se ja ta cadastrado   
    const userAlreadyExists = await usersRepositories.findOne({
      email
    });

    if(userAlreadyExists){
      throw new Error("User already exists");
    }

    const user = usersRepositories.create({
      name,
      email,
      admin
    });

    await usersRepositories.save(user);
    return user;
  }
}

export { CreateUserService }