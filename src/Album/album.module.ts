import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumRepository } from './repository/album.repository';
import { SongService } from 'src/song/song.service';
import { SongRepository } from 'src/song/repository/song.repository';
import { ArtistService } from 'src/artist/artist.service';
import { ArtistRepository } from 'src/artist/repository/artist.repository';

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
