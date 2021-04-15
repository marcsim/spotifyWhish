import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumRepository } from './models/album.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumRepository])],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
