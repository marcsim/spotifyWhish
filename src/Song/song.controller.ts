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
import { AddSongDTO } from './dto/add-song.dto';
import { UpdateSongDTO } from './dto/update-song.dto';
import { Song } from './models/song.entity';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(private SongService: SongService) {}

  @Post('/addSong')
  async createSong(@Body() addSongDTO: AddSongDTO) {
    return this.SongService.createSong(addSongDTO);
  }
  @Get('/:id')
  async getSongById(@Param('id', ParseIntPipe) id: number): Promise<Song> {
    return this.SongService.getSongById(id);
  }

  @Get()
  async getAllSongs() {
    return this.SongService.getAllSongs();
  }

  @Delete(':id')
  async deleteSongById(@Param() params) {
    return this.SongService.deleteSongById(params.id);
  }

  @Patch('/:id')
  //@UsePipes(Validator)
  updateStatusById(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    UpdateSongDTO: UpdateSongDTO,
  ) {
    return this.SongService.updateSong(UpdateSongDTO);
  }
}
