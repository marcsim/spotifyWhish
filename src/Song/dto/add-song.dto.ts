import { IsNotEmpty, IsNumber } from 'class-validator';
export class AddSongDTO {
  @IsNotEmpty({ message: 'titre est vide.' })
  title: string;
  @IsNumber()
  duration: number;
}
