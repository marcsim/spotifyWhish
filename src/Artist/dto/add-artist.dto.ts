import { IsNotEmpty, IsBoolean } from 'class-validator';
import { Album } from 'src/Album/models/album.entity';
import { Song } from 'src/Song/models/song.entity';
export class AddArtistDTO {
  @IsNotEmpty({ message: 'name est vide.' })
  name: string;
  @IsBoolean({ message: 'isBand est vide.' })
  isBand: boolean;
  songList?: Song[];
  albumList?: Album[];
}
