import { IsNotEmpty } from 'class-validator';
import { Artist } from 'src/Artist/models/artist.entity';
import { Song } from 'src/Song/models/song.entity';
export class AddAlbumDTO {
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNotEmpty({ message: 'year est vide.' })
  year: string;
  @IsNotEmpty({ message: 'cover est vide.' })
  cover: string;
  songList?: Song[];
  artistList?: Artist[];
}
