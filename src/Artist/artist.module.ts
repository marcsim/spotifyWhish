import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { ArtistRepository } from './models/artist.repository';
import { SongService } from 'src/Song/song.service';
import { AlbumService } from 'src/Album/album.service';
import { SongRepository } from 'src/Song/models/song.repository';
import { AlbumRepository } from 'src/Album/models/album.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ArtistRepository,
      SongRepository,
      AlbumRepository,
    ]),
  ],
  controllers: [ArtistController],
  providers: [ArtistService, SongService, AlbumService],
})
export class ArtistModule {}
