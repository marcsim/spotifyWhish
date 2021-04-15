import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './Album/album.module';
import { ArtistModule } from './Artist/artist.module';
import { typeormConfig } from './config/typeorm.config';
import { SongModule } from './Song/song.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [
    AlbumModule,
    ArtistModule,
    SongModule,
    UserModule,
    TypeOrmModule.forRoot(typeormConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
