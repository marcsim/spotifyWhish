import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SongRepository } from './models/song.repository';
import { AlbumService } from 'src/Album/album.service';
import { ArtistService } from 'src/Artist/artist.service';
import { AlbumRepository } from 'src/Album/models/album.repository';
import { ArtistRepository } from 'src/Artist/models/artist.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SongRepository,
      AlbumRepository,
      ArtistRepository,
    ]),
  ],
  controllers: [SongController],
  providers: [SongService, AlbumService, ArtistService],
})
export class SongModule {}
