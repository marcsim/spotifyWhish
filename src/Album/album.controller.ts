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
import { AlbumService } from './album.service';
import { AddAlbumDTO } from './dto/add-album.dto';
import { UpdateAlbumDTO } from './dto/update-album.dto';
import { Album } from './models/album.entity';

@Controller('album')
export class AlbumController {
  constructor(private AlbumService: AlbumService) {}

  @Post('/addAlbum')
  async createAlbum(@Body() AddAlbumDTO: AddAlbumDTO) {
    return this.AlbumService.createAlbum(AddAlbumDTO);
  }

  @Get('/:id')
  async getAlbumById(@Param('id', ParseIntPipe) id: number): Promise<Album> {
    return this.AlbumService.getAlbumById(id);
  }

  @Get()
  async getAllAlbums() {
    return this.AlbumService.getAllAlbums();
  }

  //Todo : active with admin or artist account
  @Delete(':id')
  async deleteAlbumById(@Param() params) {
    return this.AlbumService.deleteAlbumById(params.id);
  }

  //Todo : active with admin or artist account
  @Patch('/:id')
  //@UsePipes(Validator)
  updateStatusById(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    UpdateAlbumDTO: UpdateAlbumDTO,
  ) {
    return this.AlbumService.updateAlbum(UpdateAlbumDTO);
  }
}
