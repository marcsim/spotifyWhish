import { Album } from 'src/Album/models/album.entity';
import { Song } from 'src/Song/models/song.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  mail: string;
  @Column()
  password: string;
  /*@Column()
  songList: Song[];
  @Column()
  albumList: Album[];*/
}
