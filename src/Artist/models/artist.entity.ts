import { Album } from 'src/Album/models/album.entity';
import { Song } from 'src/Song/models/song.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Artist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  isBand: boolean;
  @ManyToMany(() => Album, (album) => album.artistList)
  albumList: Album[];
  @ManyToMany(() => Song, (song) => song.artistList)
  songList: Song[];
}
