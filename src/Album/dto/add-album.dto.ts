import { IsNotEmpty } from 'class-validator';
export class AddAlbumDTO {
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNotEmpty({ message: 'year est vide.' })
  year: string;
  @IsNotEmpty({ message: 'cover est vide.' })
  cover: string;
}
