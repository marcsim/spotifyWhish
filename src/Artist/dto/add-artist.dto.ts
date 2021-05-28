import { IsNotEmpty, IsBoolean } from 'class-validator';
import { Album } from 'src/album/models/album.entity';
import { Song } from 'src/song/models/song.entity';
export class AddArtistDTO {
  @IsNotEmpty({ message: 'name est vide.' })
  name: string;
  @IsBoolean({ message: 'isBand est vide.' })
  isBand: boolean;
  // songList?: Song[];
  // albumList?: Album[];
}
