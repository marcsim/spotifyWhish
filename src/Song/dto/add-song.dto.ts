import { IsNotEmpty, IsNumber } from 'class-validator';
import { Album } from 'src/album/models/album.entity';
import { Artist } from 'src/artist/models/artist.entity';
export class AddSongDTO {
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNumber()
  duration: number;
  // albumList?: Album[];
  // artistList?: Artist[];
}
