import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

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

  @Column()
  user_creator: string;

  @JoinColumn({name: "user_creator"})
  @ManyToOne(() => User)
  userCreator: User;

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
