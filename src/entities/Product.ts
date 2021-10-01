import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products")
class Product {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  bar_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Product };
