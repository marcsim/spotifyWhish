import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumRepository } from './models/album.repository';
import { SongService } from 'src/Song/song.service';
import { SongRepository } from 'src/Song/models/song.repository';
import { ArtistService } from 'src/Artist/artist.service';
import { ArtistRepository } from 'src/Artist/models/artist.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AlbumRepository,
      SongRepository,
      ArtistRepository,
    ]),
  ],
  controllers: [AlbumController],
  providers: [AlbumService, SongService, ArtistService],
})
export class AlbumModule {}
