import { IsNotEmpty } from 'class-validator';
export class UpdateUserDTO {
  id: number;
  @IsNotEmpty({ message: 'password est vide.' })
  password: string;
}
