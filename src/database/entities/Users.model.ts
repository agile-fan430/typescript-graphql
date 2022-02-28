import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id!: number;

  @Column({ nullable: true })
  public name!: string;

  @Column({ nullable: true })
  public balance!: number;
}
