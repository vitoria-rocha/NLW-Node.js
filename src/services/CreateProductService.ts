import { getCustomRepository } from "typeorm"
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IProductRequest {
  name: string;
  price: string;
  bar_code: string;
  user_creator: string;
}

class CreateProductService {
  async execute ({ name, price, bar_code, user_creator }: IProductRequest){
    
    const productsRepositories = getCustomRepository (ProductsRepositories);
    const userRepositories = getCustomRepository (UsersRepositories);

    const bar_codeAlreadyExists = await productsRepositories.findOne({
      bar_code
    });

    if(bar_codeAlreadyExists){
      throw new Error("Product already exists");
    }
    //criando o objeto, salvo apenas em memoria
    const product = productsRepositories.create({
      name,
      price,
      bar_code,
      user_creator
    });

    //salvando no banco de dados
    await productsRepositories.save(product);
    
    return product;
  }
}

export { CreateProductService };