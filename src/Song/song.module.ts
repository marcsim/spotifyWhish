import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SongRepository } from './models/song.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SongRepository])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
