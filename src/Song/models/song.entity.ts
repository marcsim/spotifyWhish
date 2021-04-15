import { Album } from 'src/Album/models/album.entity';
import { Artist } from 'src/Artist/models/artist.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  duration: number;
  /*@Column()
  albumList: Album[];
  @Column()
  artistList: Artist[];*/
}
