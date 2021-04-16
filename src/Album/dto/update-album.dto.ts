import { IsNotEmpty } from 'class-validator';
export class UpdateAlbumDTO {
  id: number;
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNotEmpty({ message: 'year est vide.' })
  year: string;
  @IsNotEmpty({ message: 'cover est vide.' })
  cover: string;
}
