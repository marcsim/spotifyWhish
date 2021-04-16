import { Artist } from 'src/Artist/models/artist.entity';
import { Song } from 'src/Song/models/song.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  year: string; //Todo date format
  @Column()
  cover: string; //Todo voir couverture image
  @ManyToMany(() => Song, (song) => song.albumList)
  @JoinTable()
  songList: Song[];
  @ManyToMany(() => Artist, (artist) => artist.albumList)
  @JoinTable()
  artistList: Artist[];
}
