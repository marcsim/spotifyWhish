import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { ArtistRepository } from './repository/artist.repository';
import { SongService } from 'src/song/song.service';
import { AlbumService } from 'src/album/album.service';
import { SongRepository } from 'src/song/repository/song.repository';
import { AlbumRepository } from 'src/album/repository/album.repository';

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
