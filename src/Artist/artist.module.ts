import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { ArtistRepository } from './models/artist.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistRepository])],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
