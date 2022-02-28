import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bet")
export class Bet extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id!: number;

  @Column({ nullable: false })
  public userId!: number;

  @Column({ nullable: true })
  public betAmount!: number;

  @Column({ nullable: true })
  public chance!: number;

  @Column({ nullable: true })
  public payout!: number;

  @Column({ nullable: true })
  public win!: boolean;
}
