import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
