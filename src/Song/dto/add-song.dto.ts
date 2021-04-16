import { IsNotEmpty, IsNumber } from 'class-validator';
import { Album } from 'src/Album/models/album.entity';
import { Artist } from 'src/Artist/models/artist.entity';
export class AddSongDTO {
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNumber()
  duration: number;
  albumList?: Album[];
  artistList?: Artist[];
}
