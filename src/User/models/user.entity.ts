import { Album } from 'src/Album/models/album.entity';
import { Artist } from 'src/Artist/models/artist.entity';
import { Song } from 'src/Song/models/song.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['mail'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  mail: string;
  @Column()
  password: string;
  /*@OneToOne(() => Artist)
  @JoinColumn()
  artist: Artist;*/

  //Bibliothèque d'écoute
  /*@Column()
  songList: Song[];
  @Column()
  albumList: Album[];*/
}
