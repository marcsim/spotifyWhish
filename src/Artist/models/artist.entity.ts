import { Album } from 'src/Album/models/album.entity';
import { Song } from 'src/Song/models/song.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  isBand: boolean;
  /*@Column()
  albumList: Album[];
  @Column()
  songList: Song[];*/
}
