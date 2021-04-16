import { IsNotEmpty, IsNumber } from 'class-validator';
export class UpdateSongDTO {
  id: number;
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNumber()
  duration: number;
}
