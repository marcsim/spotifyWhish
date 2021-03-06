import { Album } from 'src/Album/models/album.entity';
import { Artist } from 'src/Artist/models/artist.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  duration: number;
  @ManyToMany(() => Album, (album) => album.songList)
  albumList: Album[];
  @ManyToMany(() => Artist, (artist) => artist.songList)
  artistList: Artist[];
}
