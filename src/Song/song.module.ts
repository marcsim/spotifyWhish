import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SongRepository } from './repository/song.repository';
import { AlbumService } from 'src/album/album.service';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumRepository } from 'src/album/repository/album.repository';
import { ArtistRepository } from 'src/artist/repository/artist.repository';

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
