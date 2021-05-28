import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { AddArtistDTO } from './dto/add-artist.dto';
import { UpdateArtistDTO } from './dto/update-artist.dto';
import { Artist } from './models/artist.entity';

@Controller('artist')
export class ArtistController {
  constructor(private ArtistService: ArtistService) {}

  @Post('/addArtist')
  async createTask(@Body() AddArtistDTO: AddArtistDTO) {
    return this.ArtistService.createArtist(AddArtistDTO);
  }

  @Get('/:id')
  async getArtistById(@Param('id', ParseIntPipe) id: number): Promise<Artist> {
    return this.ArtistService.getArtistById(id);
  }

  @Get()
  async getAllArtists() {
    return this.ArtistService.getAllArtists();
  }
  //TODO : seulement admin ou si user est l'artist en question
  @Delete(':id')
  async deleteArtistById(@Param() params) {
    return this.ArtistService.deleteArtistById(params.id);
  }

  //TODO : seulement admin ou si user est l'artist en question
  @Patch('/:id')
  //@UsePipes(Validator)
  updateStatusById(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    UpdateArtistDTO: UpdateArtistDTO,
  ) {
    return this.ArtistService.updateArtist(UpdateArtistDTO);
  }
}
