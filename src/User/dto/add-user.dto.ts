import { IsNotEmpty } from 'class-validator';

export class AddUserDTO {
  @IsNotEmpty({ message: 'mail est vide.' })
  mail: string;
  @IsNotEmpty({ message: 'password est vide.' })
  password: string;
}
