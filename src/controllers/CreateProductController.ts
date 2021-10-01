import { Request, Response } from "express";
import { CreateProductService } from  "../services/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response){
    const { name, price, bar_code } = request.body

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({name, price, bar_code});
    
    return response.json(product);
  }
}

export { CreateProductController }