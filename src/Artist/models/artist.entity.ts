import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
