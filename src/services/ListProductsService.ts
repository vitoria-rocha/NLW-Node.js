import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

class ListProductsService {
  async execute() {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const products = await productsRepositories.find();

    return (products);
  }
}

export { ListProductsService };