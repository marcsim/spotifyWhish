import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
