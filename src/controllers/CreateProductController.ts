import { Request, Response } from "express";
import { CreateProductService } from  "../services/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response){
    
    const { name, price, bar_code, user_creator } = request.body
    const { user_id } = request;

    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
      name, 
      price, 
      bar_code,
      user_creator: user_id
  });
    
    return response.json(product);
  }
}

export { CreateProductController }