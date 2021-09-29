import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService{

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    //tag sem nome, nao pode
    if(!name) {
      throw new Error("Incorrect name!");
    }

    //SELECT * FROM tags WHERE name = name
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    });

    if(tagAlreadyExists) {
      throw new Error("Tag Already exists!!");
    }

    //Se tag nao existir cria a tag
    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;

  }
}

export { CreateTagService }