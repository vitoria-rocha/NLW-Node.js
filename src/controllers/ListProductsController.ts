import { Request, Response } from "express";
import { ListProductsService } from "../services/ListProductsService";

class ListProductsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute(
      user_id
    );

    return response.json(products);
  }
}

export { ListProductsController };