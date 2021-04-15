import { IsNotEmpty, IsBoolean } from 'class-validator';
export class UpdateArtistDTO {
  id: number;
  @IsNotEmpty({ message: 'name est vide.' })
  name: string;
  @IsBoolean({ message: 'isBand est vide.' })
  isBand: boolean;
}
