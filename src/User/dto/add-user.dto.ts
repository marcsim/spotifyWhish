import { IsEmail, IsNotEmpty } from 'class-validator';

export class AddUserDTO {
  @IsNotEmpty({ message: 'mail est vide.' })
  @IsEmail() //Option(Text: 'erreur dans le mail.')
  mail: string;
  @IsNotEmpty({ message: 'password est vide.' })
  password: string;
}
