import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string;
  
  name: string;
}

export { Tag }
