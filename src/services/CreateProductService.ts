import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm"

interface IProductRequest {
  name: string;
  price: string;
  bar_code: string;
}

class CreateProductService {
  async execute ({ name, price, bar_code }: IProductRequest){
    
    const productsRepositories = getCustomRepository (ProductsRepositories);

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
      bar_code
    });

    //salvando no banco de dados
    await productsRepositories.save(product);
    
    return product;
  }
}

export { CreateProductService };