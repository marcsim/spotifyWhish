import { Album } from 'src/album/models/album.entity';
import { Artist } from 'src/artist/models/artist.entity';
import { Song } from 'src/song/models/song.entity';
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

  //TODO : Relation : ManyToMany or OneToMany
  //Bibliothèque d'écoute
  /*@Column()
  songList: Song[];
  @Column()
  albumList: Album[];*/
}
