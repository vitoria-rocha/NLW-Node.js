import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

class ListProductsService {
  async execute (user_id: string){
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const products = await productsRepositories.find({
      where: {
        user_creator: user_id
      }
    })

    return products;
  }
}

export { ListProductsService };