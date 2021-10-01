import { Request, Response } from "express";
import { ListProductsService } from "../services/ListProductsService";

class ListProductsController {
  async handle(request: Request, response: Response) {
    const listProductsController = new ListProductsService();

    const users = await listProductsController.execute();

    return response.json(users);
  }
}

export { ListProductsController };