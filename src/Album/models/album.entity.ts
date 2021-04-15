import { Artist } from 'src/Artist/models/artist.entity';
import { Song } from 'src/Song/models/song.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  /*@Column()
  songList: Song[];
  @Column()
  artistList: Artist[];*/
}
